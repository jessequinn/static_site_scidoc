export default {
  mode: 'universal',
  target: 'static',
  server: {
    port: process.env.PORT || 4100,
    host: process.env.HOST || '0.0.0.0',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'We offer fullstack, both frontend and backend, devops, logging and various other microservices. We use various languages, frameworks, and cloud services such as Python (Django, Flask), PHP (Symfony, Slim), Javascript (ReactJS, AngularJS), Go (Micro), ELK, AWS and DigitalOcean to achieve your goals.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'devops, web design, backend, frontend, fullstack, javascript, python, php, golang',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'js/main.js', // TODO: find an alternative way with webpack
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ffffff' },
  router: {
    middleware: 'i18n',
  },
  generate: {
    routes: ['/', '/pt'],
  },
  /*
   ** Global CSS
   */
  css: ['@assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/i18n.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-162308441-1',
      },
    ],
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: ['faEnvelope', 'faGlobe', 'faAt'],
      },
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  styleResources: {
    scss: ['assets/scss/main.scss'],
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
