import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/tournoimkfr/", // ← nécessaire pour GitHub Pages
  plugins: [react()],
});