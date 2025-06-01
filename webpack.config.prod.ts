import path from "path";
import { Configuration, DefinePlugin, ProvidePlugin } from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import merge from "webpack-merge";
import commonConfig from "./webpack.config.common";

const corejs = "core-js";
const corejsReg = new RegExp(`[\\\\/]node_modules[\\\\/]${corejs}[\\\\/]`, "i");

const config: Configuration = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    hashDigestLength: 7,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[hash:5].[ext]",
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
                localIdentName: "[hash:5]",
                exportLocalsConvention: "camelCase",
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      cacheGroups: {
        corejs: {
          test: corejsReg,
          name: corejs,
          chunks: "all",
          priority: 20,
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: corejsReg,
        extractComments: false,
        terserOptions: {
          mangle: true,
          output: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new ProvidePlugin({
      React: "react",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new DefinePlugin({
      __DEV__: JSON.stringify(false),
      __PROD__: JSON.stringify(true),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    }),
  ],
};

export default merge<Partial<Configuration>>(commonConfig, config);
