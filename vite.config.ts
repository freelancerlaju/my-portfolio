import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Optimize PNG files
      png: {
        quality: 80,
      },
      // Optimize JPEG files
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      // Convert to WebP
      webp: {
        quality: 80,
      },
      // Don't optimize SVGs as they're already optimized
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "@radix-ui/react-avatar",
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
    ],
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          "react-vendor": ["react", "react-dom"],
          "framer-motion": ["framer-motion"],
          icons: ["react-icons", "lucide-react", "@tabler/icons-react"],
          "radix-ui": [
            "@radix-ui/react-avatar",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-toggle",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-scroll-area",
          ],
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".");
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext || "")) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext || "")) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    // Improve minification with esbuild (faster than terser)
    minify: "esbuild",
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps for production debugging (set to false for smaller builds)
    sourcemap: false,
    // Optimize dependencies
    target: "esnext",
    // Compress with terser for production
    reportCompressedSize: true,
  },
  // Performance optimizations
  server: {
    warmup: {
      clientFiles: ["./src/App.tsx", "./src/main.tsx"],
    },
  },
});
