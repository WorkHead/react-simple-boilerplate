/**
 * Created by tanjiasheng on 2016/7/6.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: './debug/js/app.js' //编译的入口文件
    },
    output: {
        path: './static/js/',
        publicPath: './static/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /^node_modules$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }

            }
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('shared.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};