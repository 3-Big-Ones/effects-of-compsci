<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/navbar.svelte";
</script>

<svelte:head>
    <title>Effects of compsci</title>
</svelte:head>

<Navbar />
<main class="contents">
    <slot />
</main>
