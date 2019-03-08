var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
console.log(__dirname);

const rules = [{
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader']
    })
},
    {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'less-loader']
        })
    },
    {
        test: /\.pcss/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
        })
    },
    {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            appendTsSuffixTo: [/\.vue$/],
        }
    },
    {
        test: /\.vue$/,
        use: {
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: ['css-loader', 'postcss-loader']}),
                    // you can also include <style lang="less"> or other langauges
                    less: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: ['css-loader', 'postcss-loader', 'less-loader']})
                }
            }
        }
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader']
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
    }
];
process.noDeprecation = true

module.exports = {
    entry: {
        mobile: path.resolve(__dirname, 'public/mobile/main.ts')
    },
    output: {
        path: path.resolve(__dirname, 'public/js/dist'),
        filename: '[name].bundle.js',
        publicPath: '/js/dist/'
    },

    module: {
        rules
    },
    watch: true,
    resolve: {
        extensions: ['.js', 'ts', '.vue'],
        /**
         * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本，若要使用 standalone 功能則需下列設定
         */
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            // new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     uglifyOptions: {
            //         compress: false,
            //         ecma: 6,
            //         mangle: true
            //     },
            //     sourceMap: true
            // })
        ]
    },
    plugins: [
        // 处理外部引入文件不能打包问题
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                babel: {
                    presets: ['es2015', 'stage-2'],
                    plugins: ['transform-runtime']
                },
                vue: {
                    loaders: {
                        css: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: ['css-loader', 'postcss-loader']}),
                        // you can also include <style lang="less"> or other langauges
                        less: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: ['css-loader', 'postcss-loader', 'less-loader']})
                    }
                }
            }
        }),
        new ExtractTextPlugin('[name].min.css'),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./public/js/dist/vendors-manifest.json'),
        })
    ],

    mode: 'production'
};