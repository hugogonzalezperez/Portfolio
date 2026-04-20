import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':    ['react', 'react-dom'],
          'vendor-motion':   ['motion'],
          'vendor-three':    ['three'],
          'vendor-r3f':      ['@react-three/fiber', '@react-three/drei'],
          'vendor-lucide':   ['lucide-react'],
        },
      },
    },
  },
});
