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
        id: "vibrant",
        name: "Vibrant",
        desc: "Bold gradients, playful energy.",
        bg: "linear-gradient(135deg, #ff00cc 0%, #3333ff 100%)",
        text: "#ffffff",
        descColor: "#ffffff",
        pillBg: "rgba(255,255,255,0.3)",
        pillText: "#ffffff",
        font: "'Arial Black', sans-serif",
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
        id: "glass",
        name: "Glassmorphism",
        desc: "Translucent, blur, pastel gradients.",
        bg: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)",
        text: "#ffffff",
        descColor: "#ffffff",
        pillBg: "rgba(255,255,255,0.4)",
        pillText: "#a05a7a",
        font: "-apple-system, sans-serif",
        border: "none"
    },
    {
        id: "saas",
        name: "SaaS",
        desc: "Functional split-screen, modern UI.",
        bg: "#fafafa",
        text: "#1a1a1a",
        descColor: "#666666",
        pillBg: "#667eea",
        pillText: "#ffffff",
        font: "-apple-system, sans-serif",
        border: "1px solid #eee"
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
];
