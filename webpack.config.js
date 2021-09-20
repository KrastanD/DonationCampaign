var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/src/index.html",
  filename: "index.html",
  inject: "body",
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const mode = env.production ? "production" : "development";
  const isDevelopment = mode === "development";
  return {
    entry: __dirname + "/src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },

        {
          test: /\.module\.scss$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: isDevelopment
                    ? "[local]__[hash:base64:5]"
                    : "[hash:base64:12]",
                },
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
          exclude: /\.module\.scss$/,
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
      extensions: [".js", ".jsx", ".scss", ".ts", ".tsx"],
    },
    output: {
      filename: "bundle.js",
      path: __dirname + "/build",
    },
    plugins: [
      HTMLWebpackPluginConfig,
      new MiniCssExtractPlugin({
        filename: isDevelopment ? "[name].css" : "[name].[contenthash].css",
        chunkFilename: isDevelopment ? "[id].css" : "[id].[contenthash].css",
      }),
    ],
    mode: mode,
  };
};
