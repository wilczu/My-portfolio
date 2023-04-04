<template>
    <div class="container mx-auto">
        <header>
            <h1 class="text-5xl text-white text-center">
                <span class="text-pink-600">02.</span>
                Projects
            </h1>
        </header>

        <section class="mt-12">
            <div class="flex flex-col gap-y-6">
                <div v-for="project in projects" :key="'project' + project.id">
                    <Card :project="project" />
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'MusicWolf',
                    image: {
                        src: 'https://res.cloudinary.com/dqswntnlm/image/upload/v1680645549/wilchu/MusicWolf/image_h9von4.png',
                        width: 500,
                        height: 500,
                        alt: 'MusicWolf website image'
                    },
                    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut id praesentium omnis fugit tempore ad doloremque dolor totam non est exercitationem quod quas laboriosam earum',
                    links: [
                        {
                            website: 'https://musicwolf.net'
                        }
                    ],
                    techStack: [
                        'Nuxt', 'Tailwindcss', 'Django', 'PostgreSQL', 'Docker'
                    ]
                },
                {
                    id: 2,
                    name: 'Phl Energy',
                    image: {
                        src: 'https://res.cloudinary.com/dqswntnlm/image/upload/v1680645549/wilchu/MusicWolf/image_h9von4.png',
                        width: 500,
                        height: 500,
                        alt: 'MusicWolf website image'
                    },
                    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut id praesentium omnis fugit tempore ad doloremque dolor totam non est exercitationem quod quas laboriosam earum',
                    links: [
                        {
                            website: 'https://musicwolf.net'
                        }
                    ],
                    techStack: [
                        'Nuxt', 'Tailwindcss', 'Django', 'PostgreSQL', 'Docker'
                    ]
                }
            ]
        }
    }
}
</script>
