export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-real-estate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/fonts.scss', '~/assets/css/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-lazyload', '~/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/router',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth', 'vue-toastification/nuxt'],

  auth: {
    plugins: ['~/plugins/auth'],
    // Options
    redirect: {
      login: '/login',
      logout: '/',
      home: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/user/login',
            method: 'POST',
            propertyName: 'token',
          },
          logout: { url: '/user/logout', method: 'post' },
          user: { url: '/user/me', method: 'get', propertyName: '' },
        },
      },
      // facebook: {
      //   endpoints: {
      //     userInfo:
      //       'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}',
      //   },
      //   client_id: '609809580240354',
      //   redirect_uri: 'https://cuongtavan.net/auth/facebook',
      //   scope: ['public_profile', 'email'],
      //   response_type: 'code',
      //   token: {
      //     property: 'access_token',
      //     type: 'Bearer',
      //     maxAge: 1800,
      //   },
      // },
      // google: {
      //   userinfo_endpoint: false,
      //   client_id:
      //     '819348098050-kuoe2q4a9gi83e2cd8lraon8gtqh7se3.apps.googleusercontent.com',
      //   redirect_uri: 'https://cuongtavan.net/auth/google',
      //   response_type: 'code',
      // },
    },
  },

  axios: {
    baseURL: 'https://api.cuongtavan.net',
    // baseURL: 'http://localhost:8000',
  },

  env: {
    awslink: 'https://369-celebrity.s3.amazonaws.com/',
  },

  // icon fontawsome
  fontawesome: {
    icons: {
      solid: ['faBars', 'faChevronDown'],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    publicPath: '/_nuxt/',
  },
  server: {
    host: '0.0.0.0',
  },
}
