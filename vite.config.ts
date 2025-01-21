import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' })],
  resolve: {
    // eslint-disable-next-line no-undef
    alias: [{ find: '@/', replacement: path.resolve(__dirname, './src/*') }],
  },
});
