import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'public', 'downloads');
const CONFIGS_DIR = path.join(ROOT_DIR, 'src/app/universal/configs');
const STYLES_DIR = path.join(ROOT_DIR, 'src/app/universal/styles');
const SHARED_DIR = path.join(ROOT_DIR, 'src/shared');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'src/components');

// Function to copy file or directory
function copy(src, dest) {
    if (fs.existsSync(src)) {
        if (!fs.existsSync(path.dirname(dest))) {
            fs.mkdirSync(path.dirname(dest), { recursive: true });
        }

        const stats = fs.statSync(src);
        if (stats.isDirectory()) {
            fs.mkdirSync(dest, { recursive: true });
            fs.readdirSync(src).forEach(childItemName => {
                copy(path.join(src, childItemName), path.join(dest, childItemName));
            });
        } else {
            fs.copyFileSync(src, dest);
        }
    }
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all template configs
const configs = fs.readdirSync(CONFIGS_DIR).filter(file => file.endsWith('.json'));

console.log(`Found ${configs.length} templates. Starting generation...`);

configs.forEach(configFile => {
    const configPath = path.join(CONFIGS_DIR, configFile);
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    let templateId = config.id;
    if (!templateId) {
        templateId = path.parse(configFile).name;
        console.warn(`⚠️ Config ${configFile} missing 'id'. Using filename '${templateId}' as ID.`);
    }
    const projectDir = path.join(ROOT_DIR, 'temp_work', templateId);

    console.log(`Generating project for: ${templateId}`);

    // Clean previous temp dir
    if (fs.existsSync(projectDir)) {
        fs.rmSync(projectDir, { recursive: true, force: true });
    }
    fs.mkdirSync(projectDir, { recursive: true });

    // 1. Copy Core Files
    ['package.json', 'tsconfig.json', 'next.config.ts', 'eslint.config.mjs', 'next-env.d.ts'].forEach(file => {
        copy(path.join(ROOT_DIR, file), path.join(projectDir, file));
    });

    // 2. Copy Source Code (Shared & Components)
    copy(SHARED_DIR, path.join(projectDir, 'src/shared'));
    copy(COMPONENTS_DIR, path.join(projectDir, 'src/components'));

    // 3. Copy Styles (Global & Specific)
    copy(path.join(ROOT_DIR, 'src/app/globals.css'), path.join(projectDir, 'src/app/globals.css'));

    // Copy ONLY the relevant style module
    const styleFiles = fs.readdirSync(STYLES_DIR).filter(f => f.includes(templateId));
    styleFiles.forEach(file => {
        copy(path.join(STYLES_DIR, file), path.join(projectDir, 'src/app/universal/styles', file));
    });

    // 4. Copy Universal Logic (excluding configs/styles initially)
    const universalSrc = path.join(ROOT_DIR, 'src/app/universal');
    const universalDest = path.join(projectDir, 'src/app/universal');

    // Copy [slug]
    copy(path.join(universalSrc, '[slug]'), path.join(universalDest, '[slug]'));

    // 5. Inject Specific Config
    const configDest = path.join(universalDest, 'configs', configFile);
    copy(configPath, configDest);

    // 6. Create Layout and Page
    // Copy root layout (simplified if needed, but standard is fine)
    copy(path.join(ROOT_DIR, 'src/app/layout.tsx'), path.join(projectDir, 'src/app/layout.tsx'));

    // Create Redirect Page
    const pageContent = `
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/universal/${templateId}');
}
`;
    fs.writeFileSync(path.join(projectDir, 'src/app/page.tsx'), pageContent.trim());

    // 7. Update package.json
    const pkgPath = path.join(projectDir, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    pkg.name = templateId;
    pkg.description = `Standalone project for ${config.title}`;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

    // 8. Copy Public Assets (Selective)
    // We should copy everything in public EXCEPT downloads
    const publicSrc = path.join(ROOT_DIR, 'public');
    const publicDest = path.join(projectDir, 'public');
    if (fs.existsSync(publicSrc)) {
        fs.mkdirSync(publicDest, { recursive: true });
        fs.readdirSync(publicSrc).forEach(item => {
            if (item !== 'downloads') {
                copy(path.join(publicSrc, item), path.join(publicDest, item));
            }
        });
    }

    // 9. Zip it
    const zipPath = path.join(OUTPUT_DIR, `${templateId}-project.zip`);
    try {
        // Use system zip command - portable enough for mac/linux
        // -r recursive, -q quiet
        // We cd into temp_work to avoid including parent path structure
        execSync(`cd "${path.join(ROOT_DIR, 'temp_work')}" && zip -r -q "${zipPath}" "${templateId}"`);
        console.log(`✅ Created: ${zipPath}`);
    } catch (e) {
        console.error(`❌ Failed to zip ${templateId}:`, e.message);
    }
});

// Cleanup
console.log('Cleaning up temporary files...');
fs.rmSync(path.join(ROOT_DIR, 'temp_work'), { recursive: true, force: true });
console.log('✨ All zips generated successfully!');
