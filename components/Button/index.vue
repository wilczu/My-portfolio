<template>
    <div class="bg-pink-600 hover:bg-gray-700 transition-all duration-300 rounded-md text-white py-2 px-4 w-fit mx-auto">
        <a v-if="type == 'link'" :href="link">
            {{ name }}
        </a>
        <a v-else-if="type == 'mail'" :href="`mailto:` + link">
            {{ name }}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
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