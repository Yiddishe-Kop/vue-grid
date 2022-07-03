import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import injectCss from "@cxing/vitejs-plugin-inject-css";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), injectCss()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "VueGridLayout",
      fileName: (format) => `vue-grid-layout.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
