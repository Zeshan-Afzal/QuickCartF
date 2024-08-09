import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://6c33-223-123-5-139.ngrok-free.app",
        changeOrigin: true,  // Add this line
        secure: false,  // Only if you're experiencing issues with HTTPS
      },
    },
  },
  plugins: [react()],
});
