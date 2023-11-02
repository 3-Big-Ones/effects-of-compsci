<script lang="ts">
    import { theme } from "$lib/theme";
    import ThemeToggle from "./theme_toggle.svelte";
    import Menu from "~icons/gg/menu";
    import Close from "~icons/gg/close";
    import ChevronUp from "~icons/gg/chevron-up";
    import ChevronDown from "~icons/gg/chevron-down";

    let mobile_menu = false;
    let mobile_content_drawer = false;
    function toggle_menu(): void { mobile_menu = !mobile_menu;}
    function toggle_drawer(): void { mobile_content_drawer = !mobile_content_drawer;}
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
            <a href="/" class="flex items-center justify-start">
                <img src="img/logo.png" alt="A.K.A" width="64" height="100" />
            </a>
            <a href="/" class="grid ml-6">Home</a>
            <a href="/" class="grid ml-6">About</a>
            <a href="/" class="grid ml-6">Content</a>
        </div>
        <!-- Theme selection buttons -->
        <ThemeToggle />
    </div>
    <!-- Mobile Nav -->
    <div class="flex w-full h-16 justify-end items-center xs:hidden px-5">
        <button on:click={toggle_menu}>
            {#if mobile_menu}<Close />{:else}<Menu />{/if}
        </button>
    </div>
    <div
        class:hidden={!mobile_menu}
        class="xs:hidden flex flex-col w-full bg-zinc-200 dark:bg-zinc-800"
    >
        <a href="/" class="px-2 py-1.5">Home</a>
        <a href="/" class="px-2 py-1.5">About</a>
        <button class="px-2 py-1.5 flex justify-between items-center" on:click={toggle_drawer}>
            <span>Content</span>
            {#if mobile_content_drawer}
                <ChevronUp />
            {:else}
                <ChevronDown />
            {/if}
        </button>
        <div class="h-px bg-zinc-400"></div>
        <div class:hidden={!mobile_content_drawer} class="flex flex-col gap-y-1.5 px-2 bg-zinc-300 dark:bg-zinc-700">
            <a href="/">Todo</a>
            <a href="/">Todo</a>
            <a href="/">Todo</a>
        </div>
        <div class="h-px bg-zinc-400"></div>
        <div class="flex w-full justify-start items-center p-2">
            <svelte:component this={ThemeToggle} show_text />
        </div>
    </div>
</nav>
