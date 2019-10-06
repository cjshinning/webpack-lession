const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
  entry: {
    'main': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          use: [
            {
              loader: 'babel-loader' 
            },
            {
              loader: 'imports-loader?this=>window' 
            }
          ]
          
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                //placeholder 占位符
                name: '[name]_[hash].[ext]',
                outputPath: 'images/',
                limit: 2048
              },
            }
          ]
        },
        {
          test: /\.(eot|ttf|svg|woff)$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _join: ['lodash', 'join']
    })
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    }
  },
  performance: false
}

module.exports = (env) => {
  if(env && env.production){
    return merge(commonConfig, prodConfig);
  }else{
    return merge(commonConfig, devConfig);
  }
}