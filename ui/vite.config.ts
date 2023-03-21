import { defineConfig } from "vite"
import windicss from "vite-plugin-windicss"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/my-element.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [windicss()],
})
