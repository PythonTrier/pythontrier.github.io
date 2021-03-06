var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [path.join(__dirname, "_dynamic/site.js")],
  debug: false,
  output: {
    path: path.resolve("./js"),
    filename: "site.js",
    publicPath: "/"
  },
  module: {
    loaders: [
{
        test: /\.jsx?$/,
        loaders: ["source-map-loader", "babel"],
        exclude: /node_modules|bower_components/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
      "bower_components"
    ],
    extensions: ["", ".js", ".jsx"]
  }
};
