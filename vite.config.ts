import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { Plugin } from "vite";

// https://vitejs.dev/config/
// GitHub project pages default to base /<repo>/; custom domains use / (see CUSTOM_SITE_URL in deploy-pages.yml).
const base = process.env.VITE_BASE_PATH ?? "/";

/** Absolute og:image / og:url — set VITE_SITE_URL when building (see deploy workflow). */
function htmlOpenGraphPlugin(): Plugin {
  return {
    name: "html-open-graph",
    enforce: "pre",
    transformIndexHtml(html) {
      const siteUrl = process.env.VITE_SITE_URL?.replace(/\/$/, "");
      const basePath = base.replace(/\/$/, "") || "";
      const relOg = `${basePath}/og.png`.replace(/\/+/g, "/");
      const ogImage = siteUrl ? `${siteUrl}/og.png` : relOg.startsWith("/") ? relOg : `/${relOg}`;
      let out = html.replaceAll("__OG_IMAGE__", ogImage);
      if (siteUrl) {
        out = out.replace(
          '<meta property="og:type" content="website" />',
          `<meta property="og:type" content="website" />\n    <meta property="og:url" content="${siteUrl}/" />`,
        );
      }
      return out;
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
