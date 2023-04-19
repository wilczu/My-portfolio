<template>

    <div>
        <div class="w-full h-[400px] relative group">
            <img 
                :src="project.image.src" 
                :width="project.image.width"
                :height="project.image.height"
                class="object-cover object-top rounded-t-md lg:rounded-md w-full h-full border-b-[18px] z-0 border-pink-600 lg:group-hover:border-b-0 transition-all duration-300"
                :alt="project.image.alt"
            />

            <div class="bg-pink-600 rounded-t-md text-center opacity-100 lg:group-hover:opacity-0 transition-all duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 py-4 px-12">
                <h3 class="text-white">{{ project.name }}</h3>
            </div>

            <div class="bg-black opacity-0 hidden lg:block group-hover:opacity-75 absolute top-0 transition-all duration-300 w-full h-full">
                <div class="flex items-center justify-center">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-30 text-center">

                        <header class="text-center text-4xl mb-3">
                            {{ project.name }}
                        </header>

                        <article>
                            {{ project.shortDescription }}
                        </article>

                        <section class="mt-4 text-right">
                            <span 
                                v-for="(tech, index) in project.techStack" 
                                :key="'stack' + index" 
                                class="text-pink-600"
                                :class="index != Object.keys(project.techStack).length - 1 ? 'px-2' : 'pl-2'"
                            >{{ tech }}</span>
                        </section>

                        <section>
                            <div class="flex gap-4 py-4 justify-end" v-for="(link, index) in project.links" :key="'link' + index">
                                <div v-if="link.website">
                                    <a :href="link.website" class="text-white hover:text-pink-600 cursor-pointer translate-all duration-300">
                                        <i class="fa-solid fa-square-up-right fa-2xl"></i>
                                    </a>
                                </div>
                                <div v-if="link.github">
                                    <a :href="link.github" class="text-white hover:text-pink-600 cursor-pointer translate-all duration-300">
                                        <i class="fa-brands fa-github fa-2xl"></i>
                                    </a>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>

        <div class="bg-pink-600 block lg:hidden text-white p-4 rounded-b-md">
            
            <article>
                {{ project.shortDescription }}
            </article>

            <section class="text-center flex flex-wrap gap-4 gap-y-0">
                <div 
                    v-for="(tech, index) in project.techStack" 
                    :key="'stack' + index" 
                    class="text-gray-700 flex-shrink break-all rounded-md py-2"
                >{{ tech }}</div>
            </section>

            <section>
                <div class="text-center mt-4 flex flex-wrap gap-4 gap-y-0">
                    <div v-for="(link, index) in project.links" :key="'link' + index">
                        <a :href="link.website" class="text-white hover:text-pink-600 cursor-pointer translate-all duration-300">
                            <i class="fa-solid fa-square-up-right fa-2xl"></i>
                        </a>
                    </div>
                </div>
            </section>

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