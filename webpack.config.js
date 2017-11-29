var path = require('path');
var webpack = require('webpack');

const common_entry_point = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(common_entry_point, 'js', 'index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(common_entry_point, 'minjs')
  }, 
  module: {
    loaders: [
        { test: /.jsx?$/, loader: "babel-loader", exclude: "/node_modules/" },
        { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
    ]
  }, 
  resolve: {
    extensions: [ " ", ".", ".js", ".jsx", "json", ".scss" ]
  },
  watch: true
};