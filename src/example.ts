
function load_theme(): void {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

type Theme = "dark" | "light" | "system";
function set_theme(event: event): void {
    const theme: Theme = event.target.value;
    if (theme === "system") { localStorage.removeItem("theme") }
    else { localStorage.theme = theme };
    load_theme();
}

const theme_selector = document.getElementById("theme-selector")!
    .addEventListener("onchange", set_theme);

load_theme();

