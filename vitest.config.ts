/// <reference types="vitest" />
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    // ... Specify options here.
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["**/node_modules/**"],
    globals: true,
  },
})
