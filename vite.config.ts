/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylex from "@stylexjs/unplugin";

export default defineConfig({
  // The StyleX plugin must come before the React plugin to keep Fast Refresh working.
  plugins: [stylex.vite({ useCSSLayers: true }), react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
