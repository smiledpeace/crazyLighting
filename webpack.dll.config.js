const webpack = require('webpack');
const path = require('path');
const library = '[name]_lib';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        vendors: ['vue', 'vuex', 'vue-router', 'axios']
    },
    output: {
        path: path.join(__dirname, 'public/js/dist'),
        filename: '[name].dll.js',
        publicPath: '/',
        library
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path: path.join(__dirname, 'public/js/dist/[name]-manifest.json'),
            name: library
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    devtool: '',
    mode: 'production'
};