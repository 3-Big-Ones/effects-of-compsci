<script lang="ts">
    // Used to prepend path needed for github pages.
    import { base } from "$app/paths";
    // Icons
    import ThemeToggle from "./theme_toggle.svelte";
    import Menu from "~icons/gg/menu";
    import Close from "~icons/gg/close";
    import ChevronUp from "~icons/gg/chevron-up";
    import ChevronDown from "~icons/gg/chevron-down";

    // State of menu's: false=closed true=open
    let dropdown = false;
    let mobile_menu = false;
    let mobile_content_drawer = false;

    function toggle_dropdown(): void {
        dropdown = !dropdown;
    }
</script>

<!-- Set the theme initally in the head to prevent theme only being applied after content is shown. -->
<!-- TODO: Figure out a way to not include this. -->
<svelte:head>
    <script lang="ts" type="module">
        const initial_theme = (window.localStorage.getItem("theme") as Theme) ?? "system";
        window.localStorage.setItem("theme", initial_theme);
        if (
            initial_theme === "dark" ||
            (initial_theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    </script>
</svelte:head>

<nav
    class="flex flex-col w-full justify-between dark:text-white text-black items-center dark:bg-zinc-900 bg-zinc-100"
>
    <!-- Desktop Nav -->
    <div class="hidden xs:flex w-full h-16 px-5 justify-between items-center">
        <div class="hidden justify-center items-center xs:flex">
            <a
                href="{base}/"
                class="flex items-center justify-start"
                aria-hidden="true"
                tabindex="-1"
            >
                <img src="{base}/img/logo.png" alt="A.K.A" width="64" height="100" />
            </a>
            <a href="{base}/" class="ml-6">Home</a>
            <a href="{base}/about" class="ml-6">About</a>
            <div class="relative inline-block">
                <button
                    class="ml-6 flex justify-center items-center"
                    aria-controls="navbar-dropdown"
                    on:click={toggle_dropdown}
                    aria-label="Sectors"
                    aria-expanded={dropdown}
                    ><span>Sectors</span>{#if dropdown}<ChevronUp />{:else}<ChevronDown
                        />{/if}</button
                >
                <div
                    id="navbar-dropdown"
                    class="absolute w-32 right-0 z-10 mt-2 origin-top-right rounded-md bg-white dark:bg-black shadow-lg dark:shadow-white/30 ring-1 ring-black dark:ring-white ring-opacity-5 focus:outline-none"
                    role="menu"
                    class:hidden={!dropdown}
                    on:click={toggle_dropdown}
                    on:keypress={toggle_dropdown}
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                >
                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                    <a
                        href="{base}/sectors/science"
                        class="text-zinc-700 dark:text-zinc-100 block px-4 py-2 text-sm"
                        role="menuitem">Science</a
                    >
                    <div class="h-px bg-zinc-400" />
                    <a
                        href="{base}/sectors/economy"
                        class="text-zinc-700 dark:text-zinc-100 block px-4 py-2 text-sm"
                        role="menuitem">Economy</a
                    >
                    <div class="h-px bg-zinc-400" />
                    <a
                        href="{base}/sectors/education"
                        class="text-zinc-700 dark:text-zinc-100 block px-4 py-2 text-sm"
                        role="menuitem">Education</a
                    >
                    <div class="h-px bg-zinc-400" />
                    <a
                        href="{base}/sectors/healthcare"
                        class="text-zinc-700 dark:text-zinc-100 block px-4 py-2 text-sm"
                        role="menuitem">Healthcare</a
                    >
                    <div class="h-px bg-zinc-400" />
                    <a
                        href="{base}/sectors/quality-of-life"
                        class="text-zinc-700 dark:text-zinc-100 block px-4 py-2 text-sm"
                        role="menuitem">Quality of life</a
                    >
                </div>
            </div>
        </div>
        <!-- Theme selection buttons -->
        <ThemeToggle />
    </div>
    <!-- Mobile Nav -->
    <div class="flex w-full h-16 justify-between items-center xs:hidden px-5">
        <img src="{base}/img/logo.png" alt="A.K.A" width="64" height="100" />
        <button on:click={() => (mobile_menu = !mobile_menu)}>
            {#if mobile_menu}<Close />{:else}<Menu />{/if}
        </button>
    </div>
    <div
        class:hidden={!mobile_menu}
        class="xs:hidden flex flex-col w-full bg-zinc-200 dark:bg-zinc-800"
    >
        <a href="{base}/" class="px-2 py-1.5">Home</a>
        <a href="{base}/about" class="px-2 py-1.5">About</a>
        <button
            class="px-2 py-1.5 flex justify-between items-center"
            aria-label="Sectors"
            aria-controls="mobile-content-drawer"
            aria-expanded={mobile_content_drawer}
            on:click={() => (mobile_content_drawer = !mobile_content_drawer)}
        >
            <span>Sectors</span>
            {#if mobile_content_drawer} <ChevronUp /> {:else} <ChevronDown /> {/if}
        </button>
        <div class="h-px bg-zinc-400" />
        <div
            id="mobile-content-drawer"
            role="menu"
            class:hidden={!mobile_content_drawer}
            class="flex flex-col gap-y-1.5 p-2 bg-zinc-300 dark:bg-zinc-700"
        >
            <a href="{base}/sectors/science" role="menuitem">Science</a>
            <a href="{base}/sectors/economy" role="menuitem">Economy</a>
            <a href="{base}/sectors/education" role="menuitem">Education</a>
            <a href="{base}/sectors/healthcare" role="menuitem">Healthcare</a>
            <a href="{base}/sectors/quality-of-life" role="menuitem">Quality of life</a>
        </div>
        <div class="h-px bg-zinc-400" />
        <div class="flex w-full justify-start items-center p-2">
            <svelte:component this={ThemeToggle} show_text />
        </div>
    </div>
</nav>
