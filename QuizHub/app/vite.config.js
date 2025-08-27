import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
  preview: { port: 5173 },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    globals: true,
    css: true,
    coverage: { provider: 'v8', reporter: ['text', 'html'] }
  }
});
