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
                "hero-home": `url("${process.env.BASE_PATH ?? ""}/img/technology.jpg");`,
                "hero-science": `url("${process.env.BASE_PATH ?? ""}/img/bg-science.webp");`,
            },
        },
    },
    plugins: [],
};
