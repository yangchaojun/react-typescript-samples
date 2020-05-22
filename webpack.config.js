const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.css', '.ts']
  },
  entry: ['./index.tsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    host: 'localhost',
    port: 8089,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelCore: '@babel/core'
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebapckPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
