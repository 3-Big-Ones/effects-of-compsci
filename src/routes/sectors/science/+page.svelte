<script lang="ts">
    // Used to prepend path needed for github pages.
    import { base } from "$app/paths";

    let ref_achievments: HTMLElement;
</script>

<div class="overflow-auto grow relative">
    <div
        class="flex flex-col justify-center items-center w-full text-white min-h-max h-full p-4 bg-hero-science bg-cover"
    >
        <div class="absolute w-full h-full bg-gradient-to-t from-5% from-black" />
        <h1 class="font-bold uppercase tracking-widest text-4xl relative z-10">Science</h1>
        <p class="text-center w-full sm:w-4/5 lg:w-[48rem] mt-5 z-10">
            Computers, and more generally technology, have been integral in the development of
            modern society.<br />From space, to communications, to biology, to power, and to new
            discoveries, computers have repeatedly proven their neccessity for modern science.
        </p>
        <a
            class="py-3 px-4 mt-5 rounded bg-zinc-100 hover:bg-zinc-900 hover:text-white text-black transition-all duration-300 font-bold z-10"
            href="#achievements"
            on:click|preventDefault={() => ref_achievments.scrollIntoView({behavior:"smooth"})}>Achievements</a
        >
    </div>
    <div
        class="flex flex-col w-full min-h-full items-center pb-72 dark:bg-gradient-to-b dark:from-black dark:to-zinc-800 bg-zinc-100"
        bind:this={ref_achievments}
        id="achievements"
    >
        <h2 class="mt-16 text-3xl dark:text-white uppercase">Achievements</h2>
        <p class="dark:text-white mb-8">
            Here are some of the most notable achievements made with technology.
        </p>
        <div class="w-full sm:w-4/5 dark:text-white flex flex-col">
            <h3 class="text-2xl underline">#1 Moon Landing 1969</h3>
            <p>
                To reach the moon, lots of technology was employed to make calculations for steering the spaceship. In addition to an computer that was onboard the spaceship, there was also a team on the ground also making calculations that were relayed to the spaceship. This allowed the spaceship to land on the moon successfully.
            </p>
            <img src="{base}/img/apollo-mission-control.jpg" class="max-h-96 rounded-xl" alt="moon landing" />
        </div>

        <div class="w-full sm:w-4/5 mt-40 dark:text-white flex flex-col">
            <h3 class="text-2xl underline self-end text-right">#2 Hubble Telescope 1990</h3>
            <p class="self-end text-right">
                To take pictures of the rest of the universe, lots of computation is needed to ensure that all of the data recieved is correctly arranged and processed. There is also lots of hardware that was required omprder to obtain the data in a format we can use.
            </p>
            <img src="{base}/img/hubble-telescope.webp" class="max-h-96 rounded-xl" alt="hubble telescope" />
        </div>
        <div class="w-full sm:w-4/5 mt-40 dark:text-white flex flex-col">
            <h3 class="text-2xl underline">#3 Computing Protein Structures</h3>
            <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            </p>
            <img src="{base}/img/protein-biosynthesis.webp" class="max-h-96 rounded-xl" alt="protein biosynthesis" />
        </div>
    </div>
</div>
