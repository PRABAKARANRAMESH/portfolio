import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
export default defineConfig(() => {
 
  
 
  return {
    plugins: [react()],
   base: '/portfolio/',
    build: {
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            mui: ['@mui/material', '@mui/icons-material'],
            // Add more only if they're installed and used
          },
        },
      },
    },
  };
});
 
 