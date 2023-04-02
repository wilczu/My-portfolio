<template>
    <div class="text-center mx-auto container">
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
                        src="https://media.licdn.com/dms/image/C4D03AQFIPo07g074bw/profile-displayphoto-shrink_800_800/0/1645010672296?e=1686182400&v=beta&t=_Ksrn5zJpKFnpiTZ3PDJd68UaNFl6Ii6zZ72oPRa1xY"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa ea obcaecati voluptates voluptatum! 
                        Doloremque earum magni ipsum, iste rerum dicta corporis dolorem mollitia ipsa similique nostrum. Et, 
                        quisquam eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa ea obcaecati voluptates voluptatum! 
                        Doloremque earum magni ipsum, iste rerum dicta corporis dolorem mollitia ipsa similique nostrum. Et, 
                        quisquam eius.
                    </article>

                    <header>
                        <h3 class="text-pink-600 my-2 text-lg">I'm writing in:</h3>
                    </header>

                    <section>
                        <div class="flex gap-4">
                            <Badge v-for="language in techStack" :key="language.id">
                                <i :class="[language.icon, 'fa-2xl']"></i>
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
                    icon: 'fa-brands fa-vuejs',
                    name: 'Vue'
                },
                {
                    id: 2,
                    icon: 'fa-brands fa-html5',
                    name: 'Html'
                },
                {
                    id: 3,
                    icon: 'fa-brands fa-css3-alt',
                    name: 'Css'
                }
            ]
        }
    }
}
</script>
