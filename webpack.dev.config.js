const path = require('path');
const webpack = require('webpack');

const SRC = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: ['./jsx/App.jsx', 'webpack-dev-server/client/?http://localhost:8080'],
  mode: "development",
  output: {
    publicPath: __dirname,
    path:
        '/java/helios-backend/src/main/resources/static'
        // __dirname
    ,
    filename: 'bundle.js',
    chunkFilename: "[name].bundle.js"
  },

  devtool: '#sourcemap',
  stats: {
   colors: true,
   reasons: true
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader', 'react-hot-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ]},
      {
        test: /\.mp3$/,
        include: SRC,
        loader: 'file-loader'
      },
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader'
      }

    ]
  },

  devServer: {
    hot : true
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]


};