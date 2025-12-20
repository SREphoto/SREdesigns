/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00f2ff",
                secondary: "#7000ff",
                accent: "#ff0055",
                dark: "#0a0a0a",
                muted: "#a0a0a0",
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                body: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))',
            },
            borderColor: {
                'glass-border': 'rgba(255, 255, 255, 0.1)',
            }
        },
    },
    plugins: [],
}
