import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyDirSync(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function staticImagesPlugin(): Plugin {
  return {
    name: 'static-images-plugin',
    configureServer(server) {
      server.middlewares.use('/images', (req, res, next) => {
        try {
          const rawUrl = req.url || '';
          const decodedUrl = decodeURIComponent(rawUrl);
          const cleanPath = decodedUrl.split('?')[0];
          const filePath = path.join(process.cwd(), 'images', cleanPath);

          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes: Record<string, string> = {
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.png': 'image/png',
              '.svg': 'image/svg+xml',
              '.webp': 'image/webp',
              '.gif': 'image/gif',
              '.pdf': 'application/pdf',
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        } catch (e) {
          console.error('Error serving static image:', e);
        }
        next();
      });
    },
    closeBundle() {
      const srcDir = path.join(process.cwd(), 'images');
      const distDir = path.join(process.cwd(), 'dist', 'images');
      if (fs.existsSync(srcDir)) {
        copyDirSync(srcDir, distDir);
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticImagesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
