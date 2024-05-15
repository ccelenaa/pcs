export default {
    root: './',
    build: {
        outDir: 'dist',
    },
    publicDir: 'public',
    server: {
        host: true,
        port: '80',
        hmr: {
            protocol: 'ws',
            host: '127.0.0.1',
            port: 3002
        }
    }
}
