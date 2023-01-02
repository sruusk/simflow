module.exports = {
    pwa: {
        name: 'Simflow',
        start_url: '/',
        themeColor: '#232832',
        manifestOptions: {
            background_color: '#232832',
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
        // pwa.iconPaths is being ignored by the build process
        // https://github.com/vuejs/vue-cli/pull/6203
        iconPaths: {
            faviconSVG: null,
            favicon32: 'icon.webp',
            favicon16: null,
            appleTouchIcon: 'icon.webp',
            maskIcon: null,
            msTileImage: 'icon.webp'
        },
        workboxPluginMode: 'GenerateSW',
    }
}
