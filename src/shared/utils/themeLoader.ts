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
    id?: string;
    theme?: string;
    title: string;
    subtitle?: string;
    style?: StyleConfig;
    products?: Product[];
    categories?: string[];
    tags?: string[];
    categoryLayout?: 'default' | 'tabs' | 'pills' | 'minimal' | 'bar';
    gridLayout?: 'grid' | 'list' | 'masonry' | 'slider';
    filterLayout?: 'sidebar-left' | 'sidebar-right' | 'top-bar' | 'modal' | 'dropdowns';
    layoutOptions?: {
        headerVisible?: boolean;
        footerVisible?: boolean;
        heroVisible?: boolean;
        animations?: boolean;
    };
    cardStyle?: 'standard' | 'blob' | 'minimal' | 'bordered';
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

const configs: Record<string, () => Promise<{ default: any }>> = {
    luxury: () => import('../../app/universal/configs/luxury.json'),
    minimalist: () => import('../../app/universal/configs/minimalist.json'),
    tech: () => import('../../app/universal/configs/tech.json'),
    editorial: () => import('../../app/universal/configs/editorial.json'),
    organic: () => import('../../app/universal/configs/organic.json'),
    industrial: () => import('../../app/universal/configs/industrial.json'),
    immersive: () => import('../../app/universal/configs/immersive.json'),
    crazy: () => import('../../app/universal/configs/crazy.json'),
    sky_ride: () => import('../../app/universal/configs/sky_ride.json'),
    turbo_racing: () => import('../../app/universal/configs/turbo_racing.json'),
    neon_tokyo: () => import('../../app/universal/configs/neon_tokyo.json'),
    liquid_metal: () => import('../../app/universal/configs/liquid_metal.json'),
    paper_kingdom: () => import('../../app/universal/configs/paper_kingdom.json'),
    glass_prism: () => import('../../app/universal/configs/glass_prism.json'),
    retro_arcade: () => import('../../app/universal/configs/retro_arcade.json'),
    deep_space: () => import('../../app/universal/configs/deep_space.json'),
    biomimicry: () => import('../../app/universal/configs/biomimicry.json'),
    hologram_hud: () => import('../../app/universal/configs/hologram_hud.json'),
    neo_brutalism: () => import('../../app/universal/configs/neo_brutalism.json'),
    candy_land: () => import('../../app/universal/configs/candy_land.json'),
};

const stylesMap: Record<string, () => Promise<{ default: Record<string, string> }>> = {
    luxury: () => import('../../app/universal/styles/luxury.module.css'),
    minimalist: () => import('../../app/universal/styles/minimalist.module.css'),
    tech: () => import('../../app/universal/styles/tech.module.css'),
    editorial: () => import('../../app/universal/styles/editorial.module.css'),
    organic: () => import('../../app/universal/styles/organic.module.css'),
    industrial: () => import('../../app/universal/styles/industrial.module.css'),
    immersive: () => import('../../app/universal/styles/immersive.module.css'),
    crazy: () => import('../../app/universal/styles/crazy.module.css'),
    sky_ride: () => import('../../app/universal/styles/sky_ride.module.css'),
    turbo_racing: () => import('../../app/universal/styles/turbo_racing.module.css'),
    neon_tokyo: () => import('../../app/universal/styles/neon_tokyo.module.css'),
    liquid_metal: () => import('../../app/universal/styles/liquid_metal.module.css'),
    paper_kingdom: () => import('../../app/universal/styles/paper_kingdom.module.css'),
    glass_prism: () => import('../../app/universal/styles/glass_prism.module.css'),
    retro_arcade: () => import('../../app/universal/styles/retro_arcade.module.css'),
    deep_space: () => import('../../app/universal/styles/deep_space.module.css'),
    biomimicry: () => import('../../app/universal/styles/biomimicry.module.css'),
    hologram_hud: () => import('../../app/universal/styles/hologram_hud.module.css'),
    neo_brutalism: () => import('../../app/universal/styles/neo_brutalism.module.css'),
    candy_land: () => import('../../app/universal/styles/candy_land.module.css'),
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
        config: configModule.default as unknown as Config,
        styles: styleModule.default,
    };
}

export function getThemeVariables(config: Config): Record<string, string> {
    if (!config.style) return {};

    const variables: Record<string, string> = {
        '--primary': config.style.colors.primary,
        '--on-primary': config.style.colors.onPrimary,
        '--secondary': config.style.colors.secondary,
        '--on-secondary': config.style.colors.onSecondary,
        '--bg': config.style.colors.background,
        '--text': config.style.colors.text,
        '--border': config.style.colors.border,
        '--card-bg': config.style.colors.cardBg,
        '--radius': config.style.shape.borderRadius,
        '--border-width': config.style.shape.borderWidth,
        '--font-main': config.style.typography.fontFamily,
        '--font-heading': config.style.typography.headingsFamily || config.style.typography.fontFamily,
    };

    if (config.style.effects?.shadow) {
        variables['--shadow-md'] = config.style.effects.shadow;
    }

    return variables;
}
