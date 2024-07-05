const path = require('path');
const { defineConfig } = require('@vue/cli-service')
const webpackPlugin = require('webpack-mkcert')

module.exports = defineConfig(async () => {
    const https = await webpackPlugin.default({
        source: 'coding',
        hosts: ['localhost', '127.0.0.1']
    })
    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ],
        },
        devServer: {
            server: {
                type: 'https',
                options: {
                    host: 'localhost',
                    ...https,
                },
            },
            static: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
        },
    }
})
