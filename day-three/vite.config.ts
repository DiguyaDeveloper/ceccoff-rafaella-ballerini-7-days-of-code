import { defineConfig } from "vite";
import { searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/wiki": {
        target: "https://pt.wikipedia.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wiki/, ""),
      },
    },
  },
});
