var path = require('path');
module.exports = {

  entry: path.resolve( __dirname, '../demo/main.js'),

  output: {
    path: __dirname + '/../build',
    publicPath: '/build/',
    filename: 'build.js',
    chunkFilename: '[name].js'
  },
  resolve: {
    alias:{
      component: path.resolve( __dirname, '../component')
    },
    extensions: ['', '.ts', '.tsx', '.js', '.vue'],
  },
  module: {
    loaders: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["es2015"],
          plugins: ["transform-object-rest-spread", "transform-vue-jsx"]
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};