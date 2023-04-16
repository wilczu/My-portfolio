<template>
    <div class="text-center mx-auto container" id="about">
        <div>
            <h1 class="text-5xl text-white text-center">
                <span class="text-pink-600">01.</span>
                About me
            </h1>
        </div>

        <section class="mt-12">
            <div class="grid grid-cols-4 gap-12">

                <div class="col-span-4 md:col-span-1 relative">
                    <div class="absolute bg-pink-600 rounded-lg top-0 left-0 w-4/5 h-4/5 z-10"></div>
                    <img 
                        src="https://res.cloudinary.com/dqswntnlm/image/upload/v1680476518/wilchu/wilczupl1_rvw83c.jpg"
                        width="500"
                        height="350"
                        class="w-[800px] h-[350px] object-cover border-l-[22px] border-t-[22px] border-transparent z-20 relative"
                    />
                </div>

                <section class="mx-auto col-span-4 md:col-span-3 text-left">

                    <header>
                        <h3 class="text-pink-600 mb-2 text-lg">Hi again,</h3>
                    </header>

                    <article class="text-white">
                        A little bit about myself. <br />
                        I'm a web developer who's absolutely passionate about creating amazing websites. I'm a bit of a perfectionist when 
                        it comes to design, so I always make sure that every pixel is in its right place. As a front-end developer, 
                        I place a lot of emphasis on creating a great user experience. After all, that's what really matters to the 
                        people who use the sites I build!
                    </article>

                    <article class="text-white mt-2">
                        I just love creating cool stuff in the digital world. Whether it's making music, designing graphics, building websites, 
                        or crafting 3D models and art, I'm always excited to dive in and see what I can come up with. There's just something 
                        about the creative process that really gets me going, and I can't wait to see where it takes me next!
                    </article>

                    <header>
                        <h3 class="text-pink-600 my-2 text-lg">Technologies, libraries and tools I'm using:</h3>
                    </header>

                    <section>
                        <div class="flex flex-wrap gap-4">
                            <Badge v-for="language in techStack" :key="language.id" class="group-hover relative">
                                <img :src="language.icon" class="w-100 h-8" />
                            </Badge>
                        </div>
                    </section>

                </section>

            </div>
        </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
            techStack: [
                {
                    id: 1,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                    name: 'Vue'
                },
                {
                    id: 2,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
                    name: 'Nuxt'
                },
                {
                    id: 3,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                    name: 'Css'
                },
                {
                    id: 4,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
                    name: 'Tailwindcss'
                },
                {
                    id: 5,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                    name: 'Html'
                },
                {
                    id: 6,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
                    name: 'Django'
                },
                {
                    id: 7,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
                    name: 'Bitbucket'
                },
                {
                    id: 8,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                    name: 'Docker'
                },
                {
                    id: 9,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                    name: 'JavaScript'
                },
                {
                    id: 10,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
                    name: 'Jira'
                },
                {
                    id: 11,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
                    name: 'Nginx'
                },
                {
                    id: 12,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
                    name: 'Npm'
                },
                {
                    id: 13,
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                    name: 'Postgresql'
                }
            ]
        }
    }
}
</script>
