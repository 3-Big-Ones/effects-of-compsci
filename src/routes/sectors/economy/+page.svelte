<script lang="ts">
    import { base } from "$app/paths";
</script>

<main class="bg-hero-economy bg-cover grow flex flex-col items-center">
    <!--Title of the page-->
    <h1
        class="py-4 my-16 text-center text-black font-bold text-5xl border-black border-2 rounded-xl bg-white"
    >
        Impact of Computing on the Global Economy
    </h1>
    <div class="flex justify-center items-center w-full flex-col xl:flex-row">
        <div class="w-3/4 md:w-1/4 rounded overflow-hidden shadow-lg bg-white">
            <img
                class="w-full h-48 object-fill"
                src="{base}/img/productivity.png"
                alt="productivity"
            />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Productivity</div>
                <div class="text-gray-700 text-base">
                    There is no doubt that computer plays an important role in the global economy.
                    It has transformed the way we work in the modern work and created many new
                    opportunities for people.
                    <li>
                        <b>Digital Transformation</b>: Workers now can have more tools to support
                        with their jobs.
                    </li>
                    <li>
                        <b>Flexibility of work</b>: People can flexibly choose between working
                        remotely and at the office. Hybrid work is proven to imporve employee's
                        concentration and performance<sup
                            ><a
                                href="https://www.forbes.com/sites/glebtsipursky/2023/02/16/a-new-study-shows-how-to-maximize-hybrid-work-productivity/"
                                class="text-blue-500 text-xl">*</a
                            ></sup
                        >
                    </li>
                    <li>
                        <b>Opportunities</b>: More opportunities for people to find jobs which match
                        their skills.
                    </li>
                    <p class="text-xs text-blue-500 underline">
                        (1) <cite
                            ><a
                                href="https://www.forbes.com/sites/glebtsipursky/2023/02/16/a-new-study-shows-how-to-maximize-hybrid-work-productivity/"
                                >Study about work hyrbid productivity</a
                            ></cite
                        >
                    </p>
                </div>
            </div>
        </div>
        <div class="w-3/4 md:w-1/4 rounded overflow-hidden shadow-lg bg-white mt-5 xl:mt-0">
            <img
                class="w-full h-48 object-fill"
                src="{base}/img/quality-of-life.jpg"
                alt="quality of life"
            />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Quality of Life</div>
                <p class="text-gray-700 text-base">
                    The advancement of Technology has heighten the living standard of people across
                    the globe. Following aspects would be examined.
                    <li>
                        <b>Entertainment</b>: People can have access to a wide range of
                        Entertainment offered by many applications.
                    </li>
                    <li>
                        <b>Political Voice</b>: Computing promotes free speech. People can now
                        express their views freely on social media regardless of backgrounds.
                    </li>
                    <li>
                        <b>Social Interaction</b>: Social media is a great platform to keep people
                        in touch with each other no matter where they are. It gives opportunities
                        for people to make new friends who share the same interest
                    </li>
                </p>
            </div>
        </div>
        <div class="w-3/4 md:w-1/4 rounded overflow-hidden shadow-lg bg-white my-5 xl:mt-0 ">
            <img
                class="w-full h-48 object-fill"
                src="{base}/img/sustainable-development.jpeg"
                alt="sustainable development"
            />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                    Sustainable development<sup
                        ><a
                            href="https://www.sciencedirect.com/science/article/pii/S0048969721036111"
                            class="text-blue-500 text-sm underline">1</a
                        ></sup
                    >
                </div>
                <div class="text-gray-700 text-base">
                    Computer helps society to achieve sustainable goals and drive it towards to
                    become a green planet.
                    <li>
                        <b>Internet</b>: is an essential tool for sustainable food production and
                        planet health.
                    </li>
                    <li>
                        <b>Artifical Intelligence</b>: can optimize energy treatment and water
                        production through advanced data analysis.
                    </li>
                    <li>
                        <b>Digitalization</b>: can guide us through climate change and protect
                        biodiversity.
                    </li>
                    <p class="text-xs text-blue-500 underline">
                        (1) <cite
                            ><a
                                href="https://www.sciencedirect.com/science/article/pii/S0048969721036111"
                                >Digitalization to achieve sustainable development goals.</a
                            ></cite
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>
