// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'ankit poudyal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'creating work people enjoy' },
        { name: 'keywords', content: 'software engineer, computer science, doordash, alarm.com, university of virginia, ut austin' },
        { name: 'author', content: 'ankit poudyal' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ankit poudyal' },
        { property: 'og:description', content: 'creating work people enjoy' },
        { property: 'og:image', content: 'https://ankitpoudyal.com/images/ankit.jpeg' },
        { property: 'og:url', content: 'https://ankitpoudyal.com' },
        { property: 'og:site_name', content: 'ankit poudyal' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ankit poudyal' },
        { name: 'twitter:description', content: 'creating work people enjoy' },
        { name: 'twitter:image', content: 'https://ankitpoudyal.com/images/ankit.jpeg' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ankitpoudyal.com' }
      ]
    }
  }
})
