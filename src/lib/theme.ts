import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

type Theme = "dark" | "light" | "system";

// If loaded from outside the browser (impossible) assign "system" as a dummy value.
export const initial_theme = browser
    ? (window.localStorage.getItem("theme") as Theme) ?? "system"
    : "system";

export const theme: Writable<Theme> = writable<Theme>(initial_theme);

export function apply_theme(theme: Theme): void {
    window.localStorage.setItem("theme", theme);
    if (
        theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

theme.subscribe((val: Theme): void => {
    if (browser) apply_theme(val);
});
