<script lang="ts">
    import { theme } from "$lib/theme";
    import Moon from "~icons/gg/moon";
    import Sun from "~icons/gg/sun";
    import Laptop from "~icons/gg/laptop";

    function toggle_theme(): void {
        if ($theme === "dark") theme.set("light");
        else if ($theme === "light") theme.set("system");
        else theme.set("dark");
    };
    export let show_text = false;
</script>
<button class="flex justify-start items-center" class:w-full={show_text} on:click={toggle_theme}>
    <div class:hidden={$theme !== "dark"}>
        <Moon />
    </div>
    <div class:hidden={$theme !== "light"}>
        <Sun />
    </div>
    <div class:hidden={$theme !== "system"}>
        <Laptop />
    </div>

    {#if show_text}<span class="capitalize ml-3">{$theme}</span>{/if}
</button>
