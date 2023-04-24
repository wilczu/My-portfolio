// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "I'm a web developer who's absolutely passionate about creating amazing websites. I'm a bit of a perfectionist when it comes to design, so I always make sure that every pixel is in its right place." },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'wilchu, kacper soja, kacper, soja, web developer, frontend developer, wilchu github' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://res.cloudinary.com/dqswntnlm/image/upload/v1681669396/wilchu/favicon_gxlkb1.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' }
      ],
      script: [
        { src: "https://kit.fontawesome.com/dd79cfe5e7.js" },
      ],
    }
  }
})
