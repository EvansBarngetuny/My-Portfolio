import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
     build: {
    manifest: true,
    outDir: 'public/build',
    emptyOutDir: true,
     },
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        hmr: {
            host: 'my-portfolio-5-zael.onrender.com',
        },
    },
    preview: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        allowedHosts: ['my-portfolio-5-zael.onrender.com'],
    },
});
