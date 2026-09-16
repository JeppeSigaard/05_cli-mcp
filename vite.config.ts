/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // The site is served from https://jeppesigaard.github.io/05_cli-mcp/, so assets
  // must be requested from that subpath rather than the domain root.
  base: "/05_cli-mcp/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
