var webpack = require("webpack");
var path = require('path');

//Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

//Exports
module.exports = {
  entry: ['./src/assets/js/index.js'],

  output: {
    filename: 'assets/js/[hash].js?',
    path: path.resolve(__dirname, './dist/')
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),

      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      minify: true,
      //favicon: 'src/favicon.ico',
      title: `Prueba técnica – InvGate`,
      template: './src/index.html',
      filename: 'index.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/css/[contenthash].css?[hash]'
    })
 ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },

      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[contenthash].[ext]'
            }
          }
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/fonts/[contenthash].[ext]'
            }
          }
        ]
      }
    ]
  },

  devServer: {
    port: 9000,
    hot: true,
    contentBase: path.resolve(__dirname, '/src'),
    compress: true
  }
};
