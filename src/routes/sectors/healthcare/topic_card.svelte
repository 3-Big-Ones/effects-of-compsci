<script lang="ts">
    export let image_path: string;
    export let title: string;
    export let text: string;
</script>

<div class="mx-4 my-2 md:basis-1/4 border-black border-4 rounded-xl bg-white">
    <img src={image_path} class="rounded-t-lg" alt={title} />
    <h2 class="my-2 px-2 pt-1 md:text-4xl text-xl font-bold">{title}</h2>
    <p class="px-2 pt-1 pb-2">
        {text}
    </p>
</div>
