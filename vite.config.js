const { createVuePlugin } = require("vite-plugin-vue2");

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    createVuePlugin(),
    {
      enforce: "pre",
    },
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/main.scss";`,
      },
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.js"),
      name: "HComponents",
    },
  },
});
