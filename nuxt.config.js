export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  devtools: true,
  loading: {
    color: "#084067",
    height: "4px",
    continuous: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Vatsal Chauhan",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Freelance Designer/Developer. Makes websites that feel alive."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poiret+One&family=Nunito:wght@100;200;300;400;600&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components", "~/components/Navigation", "~/components/Utils"]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-animejs"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxt/content",
    "@nuxtjs/style-resources",
    "@nuxtjs/svg",
    "@nuxtjs/robots"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    scss: ["./assets/scss/*.scss"]
  }
};
