import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // This allows Vite to listen on all network interfaces
    // Add your ngrok host to the allowedHosts array
    allowedHosts: ['6fa4ff4ec0f3.ngrok-free.app'],
  },
});