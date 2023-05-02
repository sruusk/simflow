/* eslint-disable */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), VitePWA({
        base: process.env.BASE_PATH || '/',
        srcDir: 'src',
        filename: 'sw.js',
        strategies: 'GenerateSW',
        includeAssets: ['icon.webp', 'logo.webp', 'robots.txt'],
        registerType: 'autoUpdate',
        manifest: {
            name: 'Simflow',
            short_name: 'Simflow',
            start_url: '/',
            theme_color: '#040e29',
            background_color: '#040e29',
            orientation: 'portrait',
            icons: [
                {
                    src: '/icon.webp',
                    sizes: '256x256',
                    type: 'image/webp',
                    purpose: 'any maskable'
                }
            ]
        },
        workbox: {
            mode: 'production',
            skipWaiting: true,
            sourcemap: false,
            globPatterns: [
                '**/*.{js,json,css,html,webp,jpg,svg,png,ico,webmanifest,txt,ttf,woff,woff2,otf,eot}'
            ]
        }
    })],
    resolve: {
        alias: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        sourcemap: true
    }
})
