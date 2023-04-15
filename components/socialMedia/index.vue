<template>
    <div>
        <div class="flex gap-4 justify-center" :class="[ position == 'row' ? 'flex-row' : 'flex-col w-fit' ]">
            <div 
                v-for="platform in socialPlatforms" 
                :key="platform.id" 
                class="hover:bg-pink-600 transition-all duration-300 cursor-pointer text-white rounded-full"
                :class="[background, size == 'medium' ? 'p-4' : 'p-2']"
            >
                <i :class="[platform.icon, size == 'medium' ? 'fa-lg px-[2px]' : 'fa-sm px-[3px]']"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socialPlatforms: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'fa-brands fa-twitter',
                    link: 'https://twitter.com'
                },
                {
                    id: 2,
                    name: 'Reddit',
                    icon: 'fa-brands fa-reddit',
                    link: 'https://reddit.com'
                },
                {
                    id: 3,
                    name: 'Github',
                    icon: 'fa-brands fa-github',
                    link: 'https://github.com'
                }
            ]
        }
    },
    props: {
        position: {
            required: false,
            type: String,
            default: 'row'
        },
        size: {
            required: false,
            type: String,
            default: 'medium'
        },
        background: {
            required: false,
            type: String,
            default: 'bg-gray-700'
        }
    }
}
</script>