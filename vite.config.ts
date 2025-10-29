import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@/atoms": resolve(__dirname, "./src/components/atoms"),
      "@/molecules": resolve(__dirname, "./src/components/molecules"),
      "@/organisms": resolve(__dirname, "./src/components/organisms"),
      "@/templates": resolve(__dirname, "./src/components/templates"),
      "@/utils": resolve(__dirname, "./src/utils"),
      "@/assets": resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "gaUi",
      fileName: format => `ga-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
})
