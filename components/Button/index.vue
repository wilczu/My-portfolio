<template>
    <div class="w-full">
        <a :href="type == 'link' ? link : `mailto:${link}`" 
            class="bg-pink-600 hover:bg-gray-700 transition-all duration-300 rounded-md text-white py-2 px-4 w-fit mx-auto text-center"
        >{{ name }}</a>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: false,
            default: "Button"
        },
        link: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            required: false,
            default: 'link'
        }
    }
}
</script>