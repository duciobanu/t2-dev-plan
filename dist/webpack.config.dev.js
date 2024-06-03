"use strict";

var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "public", "index.html")
  })],
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  },
  devServer: {
    port: 9000,
    hot: true
  }
};