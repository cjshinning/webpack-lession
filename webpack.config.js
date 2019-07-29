const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情

module.exports = {
    mode: 'development',
    // development devtool: 'cheap-module-eval-source-map'
    // production devtool: 'cheap-module-source-map'
    devtool: 'cheap-module-eval-source-ma',
    entry: {
      'main': './src/index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
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
            },
            {
              test: /\.scss$/,
              use: [
                'style-loader',
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
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CleanWebpackPlugin()
    ]
}