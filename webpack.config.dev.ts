import { ProvidePlugin, Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash:5].[ext]",
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
                localIdentName: "[path][name]__[local]___[hash:5]",
                exportLocalsConvention: "camelCase",
              },
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx|mjs)$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
    }),
    new ProvidePlugin({
      React: "react",
    }),
    new MiniCssExtractPlugin(),
    new DotenvWebpackPlugin({
      defaults: true,
      allowEmptyValues: true,
      safe: true,
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
};

export default config;
