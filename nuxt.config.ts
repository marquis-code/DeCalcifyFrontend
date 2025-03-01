export default {
  ssr: false,
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "DeCalcify",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  plugins: [
    "~/plugins/aos.client.ts",
    // "~/plugins/lottie.client.ts"
  ],
  css: ['@/assets/css/main.css'],
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  modules: ["@nuxtjs/tailwindcss", '@vueuse/motion/nuxt'], // ✅ Fix modules array
  pwa: {
    workbox: {
      enabled: true
    },
    meta: {
      title: "DeCalcify",
      author: "Marquis",
      mobileAppIOS: false,
      mobileApp: true,
      description: "Automate Your Decalcification Process | Transform your medical laboratory workflow with our intelligent automation solution. Save time, reduce errors, and improve efficiency.",
      theme_color: "#27396B",
      background_color: "#27396B",
      display: "standalone",
      start_url: "/",
      nativeUI: true,
    },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
    manifest: {
      name: "Erranders",
      lang: "fa",
      useWebmanifestExtension: false,
    },
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "https://fonts.gstatic.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "https://cdn.snipcart.com/.*",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern:
          "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
    ],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.VITE_BASE_URL || 'https://erranders-api-service.onrender.com',
    },
  },
};
