import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [
      react(),
      tailwindcss(),
      // Gzip compression
      viteCompression({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 1024,
        deleteOriginFile: false,
      }),
      // Brotli compression (better compression ratio)
      viteCompression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 1024,
        deleteOriginFile: false,
      }),
    ],
    build: {
      // Modern build optimizations
      target: "esnext",
      minify: "esbuild",
      cssMinify: true,
      cssCodeSplit: true,
      // Inline small assets
      assetsInlineLimit: 4096,
      // Chunk size warnings
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          // Code splitting for better caching
          manualChunks: {
            vendor: ["react", "react-dom"],
            router: ["react-router-dom"],
            sanity: ["@sanity/client"],
          },
          // Optimize chunk filenames
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash].[ext]",
        },
      },
      // Source maps for production debugging (optional)
      sourcemap: false,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
    },
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
