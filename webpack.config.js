const path = require('path');

const SRC = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: ['./jsx/App.jsx'],
  mode: "production",
  output: {
    path:
        '/java/helios-backend/src/main/resources/static'
        // __dirname + '/dist'
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
        loaders: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader'
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

};