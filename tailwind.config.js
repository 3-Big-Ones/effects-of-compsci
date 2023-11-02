/** @type {import('tailwindcss').Config} */
export default {
    content: ["src/**/*.{html,ts,svelte,js}"],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                xs: "512px",
            },
            backgroundImage: {
                "hero-home": "url('img/technology.jpg');",
                "hero-healthcare": "url('./img/healthcare.jpg')",
            },
        },
    },
    plugins: [],
};
