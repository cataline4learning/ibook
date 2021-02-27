export default {
  head: {
    title: 'Ibook',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Ibook - New way to read books online'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['@/assets/scss/base.scss'],
  plugins: ['@/plugins/accessor'],
  components: [{ path: '@/components', pathPrefix: false }],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@/components/bosons/Breakpoints.scss',
      '@/components/bosons/ColorPalette.scss'
    ]
  },
  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt'],
  axios: {
    baseURL: 'https://ibook-api.herokuapp.com'
  },
  build: {}
}