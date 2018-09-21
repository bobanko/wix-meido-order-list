const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  entry: "./src/index.tsx",
  output: {
    // path: path.resolve(__dirname, './dist'),
    filename: "app.js"
    // publicPath: "dist/"
  },
  devServer: {
    port: 3000
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Mathbattle"
    }),
    new CopyWebpackPlugin([{ from: "src/assets/", to: "assets" }])
  ]
};

module.exports = config;
