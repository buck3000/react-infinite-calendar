import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    server: {
      deps: {
        inline: ['vitest-canvas-mock'],
      },
    },
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    mockReset: true,
    restoreMocks: true,
  },
  define: {
    global: 'globalThis',
  }
});
