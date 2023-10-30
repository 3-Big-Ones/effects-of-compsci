/** @type {import('vite').UserConfig} */
const path = require("path");
const process = require("process");
export default {
    // ...
    root: path.join(process.cwd(), "src"),
    publicDir: path.join(process.cwd(), "src", "public"),
    build: {
        outDir: path.join(process.cwd(), "dist"),
    },
}
