// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true, // Gera um único 'index.d.ts'
    }),
  ],
  build: {
    // Configuração para o build da biblioteca
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // Ponto de entrada
      name: "gaUi", // Nome UMD (para uso em navegadores)
      fileName: (format) => `ga-ui.${format}.js`,
    },
    // Otimizações
    rollupOptions: {
      // Garante que o React não seja empacotado junto com sua lib
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
});
