require('dotenv').config();

const pkg = {
  name: 'پروژه دانش آزاد تاک',
  description: ''
};

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    htmlAttrs: {
      dir: 'rtl',
      lang: 'fa'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'}
    ]
  },

  loading: {color: '#34bfa3'},

  css: [
    {src: '@/assets/scss/app.scss', lang: 'scss'},
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  plugins: [
    '~/plugins/axios',
    {src: '~plugins/quill-plugin.js', ssr: false}
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/dotenv'
  ],

  axios: {
    baseURL: '/api/'
  },

  toast: {
    duration: 2000,
    position: 'bottom-left'
  },

  auth: {
    redirect: {
      login: '/admin/login',
      logout: '/',
      callback: '/admin/login',
      home: '/admin'
    },
    strategies: {
      local: {
        endpoints: {
          user: {url: '/user', method: 'get', propertyName: 'data'},
          login: {url: '/login', method: 'post', propertyName: 'data'},
          logout: {url: '/logout', method: 'post'},
        }
      }
    }
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  build: {
    extend(config, ctx) {
    }
  }
};
