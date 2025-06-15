import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import type { UserConfigExport } from 'vite';
import type { ViteUserConfig } from 'vitest/config';
export default defineConfig({
  plugins: [react(), svgr()],
   test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // for global setup like jest-dom
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"), // add this
    },
  },
 
} as UserConfigExport & ViteUserConfig);
