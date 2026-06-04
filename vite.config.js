import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Zajišťuje, že se cesty k souborům (CSS, JS) vygenerují relativně, což je nutné pro GitHub Pages podsložky
})
