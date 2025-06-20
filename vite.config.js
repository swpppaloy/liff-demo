import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['tuning-carroll-presenting-gathered.trycloudflare.com'],
  }
});
