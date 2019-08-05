const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[hash].js"
    // filename: "[name].js"
  },
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    host: "0.0.0.0",
    port: 3500,
    proxy: {
      "/api/*": "http://[::1]:3000" //todo: get port form server config
    }
  },
  devtool: "source-map",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
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
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".png"]
  },
  plugins: [
    new CleanWebpackPlugin(["dist/*"]),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.png"
    })
  ]
};

module.exports = config;
