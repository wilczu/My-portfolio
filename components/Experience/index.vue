<template>
    <section id="experience">
        
        <header>
            <h1 class="text-5xl text-white text-center">
                <span class="text-pink-600">03.</span>
                My experience
            </h1>
        </header>

        <section class="mt-12 container mx-auto w-fit">

            <ol class="relative border-l border-pink-600 pb-7" v-for="company in experience" :key="'year' + company.name">                  
                <li class="ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-pink-600 rounded-full -left-3"></span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-white">{{ company.name }}</h3>
                    <span class="block mb-2 text-sm font-normal leading-none text-pink-600">
                        <p>{{ company.time }}</p>
                    </span>

                    <ul v-for="description, index in company.content" class="list-disc ml-6" :key="company.name + 'desc' + index">
                        <li class="mb-1 text-base font-normal text-gray-500">
                            <p>{{ description }}</p>
                        </li>
                    </ul>
                </li>
            </ol>
        </section>

    </section>
</template>

<script>
export default {
    data() {
        return {
            experience: [
                {
                    name: "Uncover commerce",
                    time: 'May 2022 - Present',
                    content: [
                        "Creating e-commerce stores in Shopify",
                        "Providing customer support",
                        "Creating custom solutions with Vue.js for Shopify stores"
                    ]
                },
                {
                    name: "CMD + Shift",
                    time: 'Jun 2021 - Feb 2022',
                    content: [
                        "Designing and prototyping websites in Adobe XD",
                        "Creating single page application using Nuxt.js and Vue frameworks",
                        "Styling websites using TailwindCSS",
                        "Creating basic API's using Express.js and Node",
                        "Creating data-flow charts and storyboards for API behaviors"
                    ]
                },
                {
                    name: "Phl",
                    time: 'Jan 2021 - Jun 2021',
                    content: [
                        "Creating and managing e-commerce website",
                        "Data integration between systems",
                        "Consulting and collaborating with graphics designer",
                        "Deploying website and handling SEO",
                        "Creating scripts to automate tasks",
                        "Colaborating with external company/developers"
                    ]
                }
            ]
        }
    }
}
</script>
