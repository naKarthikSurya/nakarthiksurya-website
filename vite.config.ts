import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

import sitemap from "vite-plugin-sitemap";

const customDomain = "nakarthiksurya.com";
const routes = ["/", "/about", "/projects", "/experience", "/contact"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [customDomain, `www.${customDomain}`],
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port: 4173,
    allowedHosts: [customDomain, `www.${customDomain}`],
  },
  plugins: [
    react(),
    sitemap({
      hostname: `https://${customDomain}`,
      dynamicRoutes: routes,
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
