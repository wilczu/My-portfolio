<template>
    <div class="container mx-auto" id="projects">
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
                    shortDescription: 'MusicWolf is a place of variety of different music from artists all over the world. The website features dynamic content that is served from a robust backend written in Django and Rest API. To ensure seamless deployment and efficient management, the platform is deployed using docker compose as a service, which incorporates a database, proxy, and frontend.',
                    links: [
                        {
                            website: 'https://musicwolf.net'
                        }
                    ],
                    techStack: [
                        'Nuxt.js', 'Tailwindcss', 'Django', 'PostgreSQL', 'Docker', 'Docker-compose'
                    ]
                },
                {
                    id: 2,
                    name: 'Kipo counter',
                    image: {
                        src: 'https://res.cloudinary.com/dqswntnlm/image/upload/v1681652305/wilchu/Kipo%20counter/image_1_hi1yjk.png',
                        width: 500,
                        height: 500,
                        alt: 'Kipo counter website image'
                    },
                    shortDescription: "Counter is calculating the amount of time which has passed since release of season 1,2 or 3 of Kipo and the age of Wonderbeasts series. This single page application utilizes Wordtime API to ensure precise time calculations based on the user's specific timezone.",
                    links: [
                        {
                            website: 'https://kipo.wilchu.net',
                            github: 'https://github.com/wilczu/kipoCounter',
                        }
                    ],
                    techStack: [
                        'Vue.js', 'Axios', 'Vuex', 'Vue-toaster', 'TailwindCSS', 'Docker', 'Docker-compose'
                    ]
                }
            ]
        }
    }
}
</script>
