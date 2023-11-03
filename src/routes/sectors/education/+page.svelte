<script lang="ts">
    import TopicCard from "./topic_card.svelte";
</script>

<div class="grow flex flex-col">
    <div class="bg-hero-education bg-cover">
        <div
            class="w-full h-full min-h-screen grow flex flex-col align-center justify-center backdrop-blur-sm"
        >
            <!--Heading-->
            <div class="md:mx-32 mx-12 md:my-24 my-10">
                <h1
                    class="font-serif font-bold md:text-8xl text-5xl text-white text-center text-stroke-black"
                >
                    Education with Computer Science
                </h1>
            </div>
            <!--Introduction of the page-->
            <div
                class="mx-[10vw] mb-20 p-6 font-semibold text-black text-xl rounded-3xl bg-white bg-opacity-50"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </div>
    <div class="bg-gradient-to-r from-cyan-50 via-cyan-200 to-sky-300">
        <!--Topic cards-->
        <div class="my-2 grow flex flex-col" />
        <TopicCard
            image_path="/img/personalised_learning.jpg"
            title="Personalised Learning"
            text="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
        "
        />
        <TopicCard
            image_path="/img/remote_education.jpg"
            title="Remote Education"
            text="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
        "
        />
        <TopicCard
            image_path="/img/interactive_learning.jpg"
            title="Interactive Learning"
            text="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
        "
        />
        <TopicCard
            image_path="/img/resources.jpg"
            title="Access to immense digital resources"
            text="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
        "
        />
        <!--Topic box-->
        <div class="m-10 border-black border-2 flex md:flex-row flex-col">
            <div class="basis-2/5 flex overflow-hidden">
                <img src="/img/future_education.jpg" class="grow" alt="Future Education" />
            </div>
            <div class="p-10 basis-3/5 flex flex-col">
                <h2 class="mb-5 font-serif md:text-6xl text-4xl">
                    Future of Education with Computer Science?
                </h2>
                <hr class="mb-5 border-black" />
                <p class="mb-3 basis-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <cite
                    >Image by <a href="https://stock.adobe.com/uk/contributor/204739648/zinkevych"
                        >zinkevych</a
                    >
                    / <a href="https://stock.adobe.com/">Adobe Stock</a></cite
                >
            </div>
        </div>
    </div>
</div>
