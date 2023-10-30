const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,ts}"],
    theme: {
        colors: colors,
        extend: {
            colors: {
                primary: {
                    ...colors.red,
                    DEFAULT: colors.red[500]
                },
            },
        },
        extend: {
            backgroundImage: {
                "hero": "url('./assets/Technology.jpg')",
            },
        },
    },
    plugins: [],
}
