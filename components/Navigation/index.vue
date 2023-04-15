<template>
    <div class="text-center text-white py-8">
        
        <!-- === [ DESKTOP MENU ] === -->
        <div class="hidden md:flex gap-4 justify-center xs:justify-end">
            <div v-for="element in navigation" :key="element.id" class="cursor-pointer group">
                <a href="#" v-scroll-to="{ el: element.link, offset: -30 }" >
                    <span class="text-pink-600 group-hover:text-white duration-300">{{ element.id }}</span>
                    <span class="text-white group-hover:text-pink-600 duration-300">{{ element.name }}</span>
                </a>
            </div>
        </div>

        <div @click="toggleNavigation" class="text-white bg-pink-600 block md:hidden hover:bg-gray-700 duration-300 transition-all cursor-pointer py-4 px-5 rounded-md w-fit">
            <i class="fa-solid fa-bars-staggered"></i>
        </div>

        <!-- === [ MOBILE MENU ] === -->
        <transition 
            enter-to-class="animate-slideLeftIn transition-all" 
            leave-to-class="animate-slideLeftOut transition-all"
        >
            <div v-if="mobileNavigation" class="absolute top-0 left-0 md:hidden w-full h-screen z-50">
                <div class="bg-gray-700 h-full">

                    <section @click="toggleNavigation" class="py-6 text-left px-8 text-white bg-gray-800 cursor-pointer">
                        <i class="fa-solid fa-xmark fa-2xl"></i>
                    </section>

                    <section class="grid gap-y-4 px-6 py-6">
                        <div v-for="element in navigation" :key="element.id" class="cursor-pointer group">
                            <a href="#" v-scroll-to="{ el: element.link, offset: -30, onStart: function(element) {
                                toggleNavigation();
                            }, }" >
                                <span class="text-pink-600 group-hover:text-white duration-300">{{ element.id }}</span>
                                <span class="text-white group-hover:text-pink-600 duration-300">{{ element.name }}</span>
                            </a>
                            <hr class="border border-pink-600 mt-4">
                        </div>
                    </section>

                    <socialMedia class="py-6" background="bg-gray-800" />

                </div>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    data() {
        return {
            navigation: [
                {
                    id: '01',
                    name: 'About',
                    link: '#about'
                },
                {
                    id: '02',
                    name: 'Projects',
                    link: '#projects'
                },
                {
                    id: '03',
                    name: 'Experience',
                    link: '#experience'
                },
                {
                    id: '04',
                    name: 'Contact',
                    link: '#contact'
                }
            ],
            mobileNavigation: false,
        }
    },
    methods: {
        toggleNavigation() {
            this.mobileNavigation = !this.mobileNavigation;
            document.querySelector('body').classList.toggle('overflow-hidden');
        },
        resizeMenuOption(e) {
            if(e.target.innerWidth > 727 && this.mobileNavigation) {
                this.toggleNavigation();
            }
        }
    },
    created() {
        window.addEventListener("resize", this.resizeMenuOption);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeMenuOption);
    },
}
</script>