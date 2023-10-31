// This file includes any javascript common to all pages.

type Theme = "dark" | "light" | "system";

function load_theme(): void {
    if (localStorage.theme === "dark" || (!localStorage.hasOwnProperty("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
}

//
function set_theme(theme: Theme): void {
    if (theme === "system") { localStorage.removeItem("theme") }
    else { localStorage.theme = theme };
    load_theme();
}

const theme_selector = document.getElementById("theme-selector")! as HTMLInputElement;

theme_selector.addEventListener("change", (e: { target: HTMLInputElement }): void => set_theme(e.target.value as Theme));

theme_selector.value = localStorage.hasOwnProperty("theme") ? localStorage.theme : "system";

load_theme();

