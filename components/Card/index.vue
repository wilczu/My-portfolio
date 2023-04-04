<template>

    <div class="w-full h-[400px] relative group">
        <img 
            :src="project.image.src" 
            :width="project.image.width"
            :height="project.image.height"
            class="object-cover object-top rounded-md w-full h-full border-b-[18px] z-0 border-pink-600 group-hover:border-b-0 transition-all duration-300"
            :alt="project.image.alt"
        />

        <!-- <div class="bg-black hidden group-hover:block opacity-75 absolute top-0 z-20 w-full h-full"></div> -->
        <div class="bg-pink-600 rounded-t-md text-center opacity-100 group-hover:opacity-0 transition-all duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 py-4 px-12">
            <h3 class="text-white">{{ project.name }}</h3>
        </div>

        <div class="bg-black opacity-0 group-hover:opacity-75 absolute top-0 transition-all duration-300 w-full h-full">
            <div class="flex items-center justify-center">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-30">

                    <header class="text-center text-4xl mb-3">
                        {{ project.name }}
                    </header>

                    <article>
                        {{ project.shortDescription }}
                    </article>

                    <section class="mt-4 text-right">
                        <span v-for="(tech, index) in project.techStack" :key="'stack' + index" class="text-pink-600 px-2">{{ tech }}</span>
                    </section>

                    <section>
                        <div class="flex gap-4 py-4 justify-end">
                            <div v-for="(link, index) in project.links" :key="'link' + index">
                                <a :href="link.website" class="text-white hover:text-pink-600 cursor-pointer translate-all duration-300">
                                    <i class="fa-solid fa-square-up-right fa-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        }
    }
}
</script>