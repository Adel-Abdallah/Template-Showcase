import fs from 'fs';
import path from 'path';

export interface ThemeConfig {
    slug: string;
    config: any; // We can type this strictly if we import value from themeLoader types
}

const CONFIGS_DIR = path.join(process.cwd(), 'src/app/universal/configs');

export async function loadConfigs(): Promise<ThemeConfig[]> {
    try {
        const files = await fs.promises.readdir(CONFIGS_DIR);
        const jsonFiles = files.filter(file => file.endsWith('.json'));

        const configs = await Promise.all(jsonFiles.map(async (file) => {
            const filePath = path.join(CONFIGS_DIR, file);
            const content = await fs.promises.readFile(filePath, 'utf-8');
            const slug = file.replace('.json', '');
            try {
                const config = JSON.parse(content);
                return { slug, config };
            } catch (e) {
                console.error(`Error parsing config for ${file}`, e);
                return null;
            }
        }));

        return configs.filter(Boolean) as ThemeConfig[];
    } catch (error) {
        console.error('Error loading configs:', error);
        return [];
    }
}
