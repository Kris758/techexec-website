import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { Plugin } from "vite";

// https://vitejs.dev/config/
// GitHub project pages default to base /<repo>/; custom domains use / (see CUSTOM_SITE_URL in deploy-pages.yml).
const base = process.env.VITE_BASE_PATH ?? "/";

/** Absolute og:image / og:url need a public origin — set VITE_SITE_URL in CI (e.g. https://user.github.io/repo). */
function htmlOpenGraphPlugin(): Plugin {
  return {
    name: "html-open-graph",
    transformIndexHtml(html) {
      const siteUrl = process.env.VITE_SITE_URL?.replace(/\/$/, "");
      const basePath = base.replace(/\/$/, "") || "";
      const relOg = `${basePath}/og.png`.replace(/\/+/g, "/");
      const ogImage = siteUrl ? `${siteUrl}/og.png` : relOg.startsWith("/") ? relOg : `/${relOg}`;
      const ogUrlMeta = siteUrl
        ? `    <meta property="og:url" content="${siteUrl}/" />\n`
        : "";
      return html
        .replaceAll("__OG_IMAGE__", ogImage)
        .replace("__OG_URL_META__", ogUrlMeta);
    },
  };
}

export default defineConfig(() => ({
  base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), htmlOpenGraphPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
