const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'main': './src/index.js'
    },
    output: {
        filename: 'bundle.js',
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
              test: /\.scss$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                    modules: true
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
    }
}