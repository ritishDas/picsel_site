import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // This sets the alias to point to the src directory
    },
  },
  plugins: [react()],
});
