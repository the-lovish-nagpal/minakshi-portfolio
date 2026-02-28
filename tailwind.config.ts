import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "yellow-brand": "#F5E027",
                "yellow-light": "#f7e94d",
                "dark-brand": "#1a1a1a",
                "dark-bg": "#1c1c1c",
                "light-brand": "#f9f9f5",
            },
            fontFamily: {
                display: ["var(--font-anton)"],
                body: ["var(--font-inter)"],
            },
        },
    },
    plugins: [],
};
export default config;
