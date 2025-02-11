import glsl from "vite-plugin-glsl";
import { defineConfig } from "astro/config";

export default defineConfig({
   redirects: {
      "/": "/earth",
   },
   vite: {
      plugins: [glsl()],
      build: {
         target: 'esnext'
      },
      optimizeDeps: {
         exclude: ['four']
      }
   },
});