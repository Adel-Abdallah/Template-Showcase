import { notFound } from "next/navigation";

export type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
};

export type StyleConfig = {
    colors: {
        primary: string;
        onPrimary: string;
        secondary: string;
        onSecondary: string;
        background: string;
        text: string;
        border: string;
        cardBg: string;
    };
    typography: {
        fontFamily: string;
        headingsFamily?: string;
    };
    shape: {
        borderRadius: string;
        borderWidth: string;
    };
    effects?: {
        shadow: string;
    };
};

export type Config = {
    theme: string;
    title: string;
    subtitle?: string;
    style?: StyleConfig;
    products?: Product[];
    categories?: string[];
    tags?: string[];
    features: {
        hero: boolean;
    };
    apiConfig?: {
        endpoint: string;
        params: Record<string, string | number>;
    };
    header: {
        links: { label: string; href: string }[];
        cartIcon: boolean;
    };
    footer: {
        text: string;
        links: { label: string; href: string }[];
    };
};

const configs: Record<string, () => Promise<{ default: Config }>> = {
    luxury: () => import('../../app/universal/configs/luxury.json'),
    minimalist: () => import('../../app/universal/configs/minimalist.json'),
    tech: () => import('../../app/universal/configs/tech.json'),
    editorial: () => import('../../app/universal/configs/editorial.json'),
    organic: () => import('../../app/universal/configs/organic.json'),
    industrial: () => import('../../app/universal/configs/industrial.json'),
    immersive: () => import('../../app/universal/configs/immersive.json'),
};

const stylesMap: Record<string, () => Promise<{ default: Record<string, string> }>> = {
    glass: () => import('../../app/universal/styles/glass.module.css'),
    luxury: () => import('../../app/universal/styles/luxury.module.css'),
    minimalist: () => import('../../app/universal/styles/minimalist.module.css'),
    tech: () => import('../../app/universal/styles/tech.module.css'),
    editorial: () => import('../../app/universal/styles/editorial.module.css'),
    organic: () => import('../../app/universal/styles/organic.module.css'),
    vibrant: () => import('../../app/universal/styles/vibrant.module.css'),
    industrial: () => import('../../app/universal/styles/industrial.module.css'),
    saas: () => import('../../app/universal/styles/saas.module.css'),
    immersive: () => import('../../app/universal/styles/immersive.module.css'),
};

export async function loadThemeData(slug: string) {
    const loadConfig = configs[slug];
    const loadStyles = stylesMap[slug];

    if (!loadConfig || !loadStyles) {
        return null;
    }

    const [configModule, styleModule] = await Promise.all([
        loadConfig(),
        loadStyles()
    ]);

    return {
        config: configModule.default,
        styles: styleModule.default,
    };
}
