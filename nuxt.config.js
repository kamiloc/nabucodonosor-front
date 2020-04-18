const APOLLO_URL =
  'http://nabuco-main.southcentralus.azurecontainer.io:8000/graphql'

module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['vuesax/dist/vuesax.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuesax'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  styleResources: {
    scss: ['~assets/vars/*.scss']
  },
  // Give apollo module options
  apollo: {
    watchLoading: '~/plugins/apollo-watch-loading-handler.js',
    errorHandler: '~/plugins/apollo-error-handler.js',
    includeNodeModules: true,
    clientConfigs: {
      default: {
        httpEndpoint: APOLLO_URL
      }
    },
    test: {
      httpEndpoint: APOLLO_URL
    }
  }
}
