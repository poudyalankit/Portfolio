export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ankit Poudyal',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Software Engineer and CS @ UVA Engineering' },
      { hid: 'og:image', property: 'og:image', content: 'https://i.imgur.com/PDmT2w9.png' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/styles/global.css'
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
      ['@nuxtjs/google-fonts', {
        families: {
          'Open+Sans': [100, 200, 300, 400, 500, 600, 700, 800]
        }
      }]
    ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
