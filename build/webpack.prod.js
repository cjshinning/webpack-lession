const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                    importLoaders: 2,
                    // modules: true
                    }
                },
                'sass-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                    ident: 'postcss',
                    plugins: [
                        require('autoprefixer')
                    ]
                    }
                }
            ]
          },
          {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                    ident: 'postcss',
                    plugins: [
                        require('autoprefixer')
                    ]
                    }
                }
            ]
          }
        ]
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);