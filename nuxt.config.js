const env = require('dotenv').config();

module.exports = {
  mode: 'universal',
  /*
  ** Merge environment variables.
   * @see https://itnext.io/using-multiple-env-files-in-nuxt-15703d7535f3
   * @see https://codecourse.com/watch/using-env-files-with-nuxt?part=using-env-files-with-nuxt
  */
  env: env.parsed,

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    // baseURL: 'http://127.0.0.1:3333/api'
    baseURL: 'http://localhost:3000/api'
    // baseURL: 'http://192.168.1.161:3333/api'
  },
  auth: {
    strategies: {
      github: {
        client_id: process.env.GIT_CLIENT_ID,
        client_secret: process.env.GIT_CLIENT_SECRET
      },
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
