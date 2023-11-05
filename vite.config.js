import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["react-icons/FI"],
    },
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
});
