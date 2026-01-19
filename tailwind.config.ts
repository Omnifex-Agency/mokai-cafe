import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Mokai Brand Colors mapped to Tailwind
                'rice-paper': '#FDFCF8',
                'warm-grey': '#F4F1EA',
                'mocha': '#A67B5B',
                'matcha': '#7A8B68',
                'latte': '#E8DCC4',
                'dark-black': '#111111',
            },
            fontFamily: {
                heading: ['var(--font-playfair)', 'serif'],
                body: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
