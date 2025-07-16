import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: '/health/', // ✅ This is required for correct asset paths on Netlify
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5173
    },
    define: {
      'process.env': env,
    }
  };
});
