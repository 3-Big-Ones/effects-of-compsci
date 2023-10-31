/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,ts,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero": "url('./assets/Technology.jpg')",
            },
        },
    },
    plugins: [],
}

