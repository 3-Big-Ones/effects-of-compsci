<script lang="ts">
    export let image_path: string;
    export let title: string;
    export let text: string;
</script>

<div
    class="mx-[4vw] my-2 flex md:flex-row flex-col border-black border-4 rounded-xl bg-white overflow-hidden"
>
    <div class="md:basis-2/3">
        <h2 class="px-4 pt-4 pb-2 md:text-4xl text-xl font-bold">{title}</h2>
        <p class="px-4 pt-2 pb-4">
            {text}
        </p>
    </div>
    <div class="md:basis-1/3">
        <img src={image_path} alt={title} />
    </div>
</div>
