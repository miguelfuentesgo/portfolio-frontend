// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  css: [
    '@/assets/scss/main.scss'

  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/variables" as *;`  
        }
      }
    }
  },
  plugins: [
    { src: '~/plugins/cursor.js', mode: 'client' },
    '~/plugins/fontawesome.js' 
  ]
})
