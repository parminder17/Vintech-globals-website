import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  ...(isSsrBuild
    ? {
        build: {
          ssr: true,
          rollupOptions: {
            input: 'src/entry-server.tsx',
          },
        },
      }
    : {}),
}));
