<script lang="ts">
    import TopicCard from "./topic_card.svelte";
</script>

<div class="bg-hero-healthcare bg-cover bg-fixed grow flex flex-col">
    <!--Heading-->
    <div class="md:mx-32 mx-12 md:my-24 my-10 grow flex flex-row">
        <h1 class="md:basis-4/5 font-bold md:text-8xl text-5xl text-left">
            How has <br /> Computer Science advanced Healthcare?
        </h1>
    </div>
    <!--Introduction of the page-->
    <div
        class="mx-[10vw] mb-20 p-6 text-white text-xl border-black border-2 bg-black bg-opacity-60"
    >
        <p>
            In an increasingly digitised world, the influence of computer science on healthcare is
            undeniable. This page delves into this evolving relationship, exploring how technology
            is reshaping the healthcare landscape. From artificial intelligence aiding in medical
            diagnoses to the adoption of electronic health records, we'll uncover the various impact
            of these advancements.
        </p>
    </div>
    <!--Topic cards-->
    <div class="my-2 grow flex md:flex-row flex-col">
        <TopicCard
            image_path="/img/telemedicine.jpg"
            title="Telemedicine"
            text="
                Telemedicine platform facilitate remote consultations and enhanced chronic
                conditions monitoring, benefiting elderly patients in remote or rural areas. Some
                businesses and researchers are working on telesurgery, a field in which robotic
                systems are used for remote surgery. This has become more viable due to improved
                networking technology such as 5G.
        "
        />
        <TopicCard
            image_path="/img/wearables.jpg"
            title="Healthcare Wearables"
            text="
                Wearable technology features built-in sensors for tracking activity and monitoring
                health. These sensors collect data and utilize algorithms and machine learning for
                analysis. Some wearables, especially those with ECG capabilities, prove invaluable
                for early intervention and ongoing patient condition monitoring.
        "
        />
        <TopicCard
            image_path="/img/radiology.jpg"
            title="Radiology and Imaging"
            text="
                Artificial intelligence, notably Mia (Mammography Intelligent Assessment), assists
                radiologists by helping them work more efficiently, These technologies allow
                radiologists to devote more time to patient care or screen greater number of people
                quickly. It's a vital tool in enhancing the accuracy and efficiency of diagnosis and
                treatment.
        "
        />
        <TopicCard
            image_path="/img/big_data.jpg"
            title="Big Data Analysis"
            text="
                Big data analysis in healthcare involves the collection, processing, and
                interpretation of vast amounts of health-related information. This data allows
                healthcare providers to identify patterns and enables early disease detection and
                personalized treatment plans. Moreover, big data analytics can enhance research,
                drug development, and healthcare operations.
        "
        />
    </div>
    <!--Topic box-->
    <div class="m-10 p-8 border-black border-2 flex flex-col">
        <h2 class="mb-5 font-serif md:text-6xl text-4xl">
            Future of Healthcare with Computer Science?
        </h2>
        <hr class="mb-5 border-black" />
        <div class="flex md:flex-row flex-col">
            <p
                class="grow mb-5 mr-5 p-4 basis-3/4 font-mono text-2xl bg-white bg-opacity-80 rounded"
            >
                Over the past decades, healthcare has rapidly improved with the advancement of
                technology. Now, Brain-Computer Interfaces, once the stuff of science fiction, are
                becoming more realistic. It prompts us to imagine whether there will be a day when
                our health information is seamlessly collected by in-body sensors, seamlessly
                tracking and monitoring our well-being. However, the question remains: is this a
                utopian vision of healthcare, where everything is convenient and precise, or does it
                raise concerns of a dystopian future where privacy and autonomy are compromised?
            </p>
            <div class="basis-1/4 p-1 border-black rounded bg-indigo-500">
                <img
                    src="/img/future_healthcare.jpg"
                    class="object-cover rounded"
                    alt="Future Healthcare"
                />
                <cite class="text-center">
                    Image by <a
                        href="https://www.freepik.com/free-vector/futuristic-technology-medical-infographic_7365075.htm"
                        >Freepik</a
                    >
                </cite>
                <h3 class="font-mono text-center text-white">
                    Could something in SciFi actually happen?
                </h3>
            </div>
        </div>
    </div>
</div>
