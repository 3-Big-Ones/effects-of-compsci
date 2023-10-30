// This file includes any javascript common to all pages.

function load_theme(): void {
    if (localStorage.theme === "dark" || (!localStorage.hasOwnProperty("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
}

// type Theme = "dark" | "light" | "system";
//
// function on_theme_change(event: HTMLInputElement): void {
//     const theme: Theme = event.target.value;
//     if (theme === "system") { localStorage.removeItem("theme") }
//     else { localStorage.theme = theme };
//     load_theme();
// }
//
const theme_selector = document.getElementById("theme-selector")!
    .addEventListener("onchange", (e) => console.log(e));

load_theme();

