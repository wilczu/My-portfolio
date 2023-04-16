export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wilchu - portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "I'm a web developer who's absolutely passionate about creating amazing websites. I'm a bit of a perfectionist when it comes to design, so I always make sure that every pixel is in its right place." },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'wilchu, kacper soja, kacper, soja, web developer, frontend developer, wilchu github' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://res.cloudinary.com/dqswntnlm/image/upload/v1681669396/wilchu/favicon_gxlkb1.ico' }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/dd79cfe5e7.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['vue-scrollto/nuxt', { duration: 600 }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}
