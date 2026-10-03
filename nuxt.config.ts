export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8000/api/v1"
    }
  },
  vite: {
    plugins: []
  },
  app: {
    head: {
      htmlAttrs: { lang: "fa", dir: "rtl" },
      meta: [
        { name: "description", content: "Rozelle — فروشگاه آنلاین محصولات زیبایی و مراقبت شخصی" }
      ]
    }
  }
})