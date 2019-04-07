require('dotenv').config();

module.exports = {
  mode: 'universal',

  head: {
    titleTemplate: '%s | پروژه دانش آزاد تاک',
    htmlAttrs: {
      dir: 'rtl',
      lang: 'fa'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'پروژه دانش آزاد تاک با هدف انتقال دانش میان فارسی زبانان شکل گرفته است. این پروژه قصد دارد تا پلی میان متخصصان و "دانش جو" های فارسی زبان ایجاد کند تا با استفاده از این بستر مجازی به تبادل تجربه و دانش بپردازند.'}
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
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
  ],

  axios: {
    proxy: true,
    baseURL: '/'
  },

  toast: {
    duration: 2000,
    position: 'bottom-left'
  },

  proxy: {
    '/api/': {
      target: process.env.hostURL,
      pathRewrite: {'^/api/': ''},
      secure: false
    },
    '/media/': {
      target: process.env.hostURL,
      secure: false
    },
    '/junk/': {
      target: process.env.hostURL,
      secure: false
    }
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
          user: {url: '/api/user', method: 'get', propertyName: 'data'},
          login: {url: '/api/login', method: 'post', propertyName: 'data'},
          logout: {url: '/api/logout', method: 'post'},
        }
      }
    }
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.hostURL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: [
      '/admin',
      '/admin/**',
    ],
  },

  build: {
    extend(config, ctx) {
    }
  }
};
