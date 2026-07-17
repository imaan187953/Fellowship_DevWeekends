import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Todo-TASK/",

  plugins: [react(), tailwindcss()],

  test: {
    globals: true,
    environment: "jsdom",
  },
});