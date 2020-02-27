var path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  watch: true,
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  entry: {
    main: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: "eslint-loader",
        enforce: "pre"
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "src/assets/img/[name].[hash:7].[ext]"
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "css-loader" }, { loader: "vue-style-loader" }]
      },
      {
        test: /\.scss$/,
        use: [{ loader: "css-loader" }, { loader: "sass-loader" }]
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          root: "index.html"
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    })
  ]
};
