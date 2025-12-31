export interface Template {
    id: string;
    name: string;
    desc: string;
    bg: string;
    text: string;
    descColor: string;
    pillBg: string;
    pillText: string;
    font: string;
    border: string;
}

export const templates: Template[] = [
    {
        id: "minimalist",
        name: "Minimalist",
        desc: "Clean lines, whitespace, essentialism.",
        bg: "#ffffff",
        text: "#111111",
        descColor: "#666666",
        pillBg: "#111111",
        pillText: "#ffffff",
        font: "'Helvetica Neue', sans-serif",
        border: "none"
    },
    {
        id: "luxury",
        name: "Luxury",
        desc: "Dark mode, gold accents, serif typography.",
        bg: "#050505",
        text: "#e0e0e0",
        descColor: "#bf9b30",
        pillBg: "#bf9b30",
        pillText: "#000000",
        font: "Georgia, serif",
        border: "none"
    },
    {
        id: "tech",
        name: "Tech",
        desc: "Cyberpunk, grid lines, neon accents.",
        bg: "#000000",
        text: "#00ff00",
        descColor: "#00ff00",
        pillBg: "#00ff00",
        pillText: "#000000",
        font: "'Courier New', monospace",
        border: "1px solid #00ff00"
    },
    {
        id: "editorial",
        name: "Editorial",
        desc: "Magazine layout, bold typography.",
        bg: "#f4ecdf",
        text: "#1a1a1a",
        descColor: "#555555",
        pillBg: "#1a1a1a",
        pillText: "#f4ecdf",
        font: "'Helvetica', sans-serif",
        border: "none"
    },
    {
        id: "organic",
        name: "Organic",
        desc: "Soft shapes, earth tones, natural.",
        bg: "#f7f5f2",
        text: "#2c2925",
        descColor: "#5a544b",
        pillBg: "#4a453f",
        pillText: "#f7f5f2",
        font: "'Gill Sans', sans-serif",
        border: "none"
    },
    {
        id: "industrial",
        name: "Industrial",
        desc: "Brutalist, raw materials, dashed lines.",
        bg: "#2b2b2b",
        text: "#ffffff",
        descColor: "#ff3300",
        pillBg: "#ff3300",
        pillText: "#000000",
        font: "'Arial Narrow', sans-serif",
        border: "2px solid #ff3300"
    },
    {
        id: "immersive",
        name: "Immersive",
        desc: "Full-screen, scroll-snapping, art.",
        bg: "#000000",
        text: "#ffffff",
        descColor: "#888888",
        pillBg: "#ffffff",
        pillText: "#000000",
        font: "'Times New Roman', serif",
        border: "1px solid #333"
    },
    {
        id: "crazy",
        name: "Crazy Mode",
        desc: "High contrast, aggressive animations, black & yellow.",
        bg: "#000000",
        text: "#FFD700",
        descColor: "#FFD700",
        pillBg: "#FFD700",
        pillText: "#000000",
        font: "'Courier New', monospace",
        border: "2px solid #FFD700"
    },
    {
        id: "sky_ride",
        name: "Sky Ride",
        desc: "A soft, airy theme with floating animations and pastel colors.",
        bg: "#F0F8FF",
        text: "#2F4F4F",
        descColor: "#2F4F4F",
        pillBg: "#87CEEB",
        pillText: "#FFFFFF",
        font: "'Quicksand', sans-serif",
        border: "none"
    },
    {
        id: "turbo_racing",
        name: "Turbo Racing",
        desc: "High-octane car gaming theme with vibrant blue, yellow, and orange accents.",
        bg: "#0A0A12",
        text: "#FFFFFF",
        descColor: "#CCCFD6",
        pillBg: "#FF9900",
        pillText: "#000000",
        font: "'Orbitron', sans-serif",
        border: "1px solid #00CCFF"
    },
    { id: "neon_tokyo", name: "Neon Tokyo", desc: "Cyberpunk 2077 vibes with glitch effects.", bg: "#050505", text: "#E0E0E0", descColor: "#E0E0E0", pillBg: "#FF00FF", pillText: "#FFF", font: "Orbitron", border: "1px solid #00FFFF" },
    { id: "liquid_metal", name: "Liquid Metal", desc: "Premium chrome and future business sleekness.", bg: "#F5F5F7", text: "#1D1D1F", descColor: "#1D1D1F", pillBg: "#000", pillText: "#FFF", font: "Inter", border: "1px solid #CCC" },
    { id: "paper_kingdom", name: "Paper Kingdom", desc: "Textured, origami-style theme for kids.", bg: "#FFF9E6", text: "#2C3E50", descColor: "#2C3E50", pillBg: "#FF6B6B", pillText: "#FFF", font: "Comic Neue", border: "2px solid #2C3E50" },
    { id: "glass_prism", name: "Glass Prism", desc: "Advanced refractive glass with vivid gradients.", bg: "#000", text: "#FFF", descColor: "#DDD", pillBg: "rgba(255,255,255,0.2)", pillText: "#FFF", font: "Raleway", border: "1px solid rgba(255,255,255,0.2)" },
    { id: "retro_arcade", name: "Retro Arcade", desc: "8-bit pixel art with CRT scanlines.", bg: "#121212", text: "#00FF00", descColor: "#00FF00", pillBg: "#FF0055", pillText: "#FFF", font: "Press Start 2P", border: "4px solid #00FF00" },
    { id: "deep_space", name: "Deep Space", desc: "Immersive parallax stars and dark nebulas.", bg: "#000", text: "#CCC", descColor: "#AAA", pillBg: "#7F00FF", pillText: "#FFF", font: "Exo 2", border: "1px solid #7F00FF" },
    { id: "biomimicry", name: "Biomimicry", desc: "Organic shapes and breathing animations.", bg: "#F1F8E9", text: "#33691E", descColor: "#33691E", pillBg: "#4CAF50", pillText: "#FFF", font: "Nunito", border: "none" },
    { id: "hologram_hud", name: "Hologram HUD", desc: "Sci-fi interface with grid lines and flickering.", bg: "#001133", text: "#00FFFF", descColor: "#00FFFF", pillBg: "#0033FF", pillText: "#FFF", font: "Share Tech Mono", border: "1px solid #00FFFF" },
    { id: "neo_brutalism", name: "Neo Brutalism", desc: "Bold, raw, high-contrast shock.", bg: "#F0F0F0", text: "#000", descColor: "#000", pillBg: "#000", pillText: "#FFF", font: "Archivo Black", border: "4px solid #000" },
    { id: "candy_land", name: "Candy Land", desc: "Glossy 3D buttons and vibrant pastels.", bg: "#FFF0F5", text: "#880E4F", descColor: "#880E4F", pillBg: "#FF69B4", pillText: "#FFF", font: "Varela Round", border: "4px solid #FF69B4" }
];
