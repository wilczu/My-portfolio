<template>
    <div class="py-8 text-center text-white px-16">
        
        <div class="flex gap-4 justify-end">
            <div v-for="element in navigation" :key="element.id" class="cursor-pointer group">
                <span class="text-pink-600 group-hover:text-white duration-300">{{ element.id }}</span>
                <span class="text-white group-hover:text-pink-600 duration-300">{{ element.name }}</span>
            </div>
        </div>

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
            ]
        }
    }
}
</script>