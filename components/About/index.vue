<template>
    <div class="text-center mx-auto container py-16" id="about">
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
                        <p class="text-pink-600 mb-2 text-lg">Hi again,</p>
                    </header>

                    <article class="text-white">
                        <p>
                            A little bit about myself. <br />
                            I'm a web developer who's absolutely passionate about creating amazing websites. I'm a bit of a perfectionist when 
                            it comes to design, so I always make sure that every pixel is in its right place. As a front-end developer, 
                            I place a lot of emphasis on creating a great user experience. After all, that's what really matters to the 
                            people who use the sites I build!
                        </p>
                    </article>

                    <article class="text-white mt-2">
                        <p>
                            I just love creating cool stuff in the digital world. Whether it's making music, designing graphics, building websites, 
                            or crafting 3D models and art, I'm always excited to dive in and see what I can come up with. There's just something 
                            about the creative process that really gets me going, and I can't wait to see where it takes me next!
                        </p>
                    </article>

                    <header>
                        <p class="text-pink-600 mb-2 mt-8 text-lg">Technologies, libraries and tools I'm using:</p>
                    </header>

                    <section>
                        <div class="flex flex-wrap items-center gap-4">
                            <Badge v-for="language in techStack" :key="language.id" class="group-hover relative devicon">
                                <i :class="language.icon"></i>
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
                    icon: 'devicon-vuejs-plain',
                    name: 'Vue'
                },
                {
                    id: 2,
                    icon: 'devicon-nuxtjs-plain',
                    name: 'Nuxt'
                },
                {
                    id: 3,
                    icon: 'devicon-css3-plain',
                    name: 'Css'
                },
                {
                    id: 4,
                    icon: 'devicon-tailwindcss-plain',
                    name: 'Tailwindcss'
                },
                {
                    id: 5,
                    icon: 'devicon-html5-plain',
                    name: 'Html'
                },
                {
                    id: 6,
                    icon: 'devicon-django-plain',
                    name: 'Django'
                },
                {
                    id: 7,
                    icon: 'devicon-github-original',
                    name: 'Github'
                },
                {
                    id: 8,
                    icon: 'devicon-docker-plain',
                    name: 'Docker'
                },
                {
                    id: 9,
                    icon: 'devicon-javascript-plain',
                    name: 'JavaScript'
                },
                {
                    id: 10,
                    icon: 'devicon-jira-plain',
                    name: 'Jira'
                },
                {
                    id: 11,
                    icon: 'devicon-nginx-original',
                    name: 'Nginx'
                },
                {
                    id: 12,
                    icon: 'devicon-npm-original-wordmark',
                    name: 'Npm'
                },
                {
                    id: 13,
                    icon: 'devicon-postgresql-plain',
                    name: 'Postgresql'
                },
                {
                    id: 14,
                    icon: 'devicon-git-plain',
                    name: 'Git'
                },
                {
                    id: 15,
                    icon: 'fa-brands fa-shopify',
                    name: 'Shopify'
                }
            ]
        }
    }
}
</script>
