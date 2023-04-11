<template>
    <section id="experience">
        
        <header>
            <h1 class="text-5xl text-white text-center">
                <span class="text-pink-600">03.</span>
                My experience
            </h1>
        </header>

        <section class="mt-6 container mx-auto w-fit">

            <ol class="relative border-l border-pink-600 pb-7" v-for="company in experience" :key="'year' + company.name">                  
                <li class="ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-pink-600 rounded-full -left-3"></span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-white">{{ company.name }}</h3>
                    <span class="block mb-2 text-sm font-normal leading-none text-pink-600">
                        {{ company.time }} {{ company.year }}
                    </span>

                    <ul v-for="description, index in company.content" class="list-disc ml-6" :key="company.name + 'desc' + index">
                        <li class="mb-1 text-base font-normal text-gray-500">
                            {{ description }}
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
                    year: '2023',
                    time: 'Jan - Nov',
                    content: [
                        "test value 1",
                        "test value 2",
                        "test value 3"
                    ]
                },
                {
                    name: "CMD + Shift",
                    year: '2023',
                    time: 'Jan - Nov',
                    content: [
                        "test value 1",
                        "test value 2",
                        "test value 3"
                    ]
                }
            ]
        }
    }
}
</script>
