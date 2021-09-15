const isDevelopment = process.env.NODE_ENV === "development";

var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/src/index.html",
  filename: "index.html",
  inject: "body",
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: isDevelopment ? "[name].css" : "[name].[contenthash].css",
  chunkFilename: isDevelopment ? "[id].css" : "[id].[contenthash].css",
});

module.exports = {
  entry: __dirname + "/src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.module\.scss$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module.(scss)$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
  },
  plugins: [HTMLWebpackPluginConfig, MiniCssExtractPluginConfig],
  mode: "development",
};
