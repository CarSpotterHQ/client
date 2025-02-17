import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: "**/*.svg" })],
  resolve: {
    // eslint-disable-next-line no-undef
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ @를 src 경로로 설정
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://3.36.160.101:8080/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
