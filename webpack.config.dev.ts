import {
  DefinePlugin,
  Configuration as WebpackConfiguration,
} from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import commonConfig from "./webpack.config.common";
import { merge } from "webpack-merge";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: "development",
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
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __DEV__: JSON.stringify(true),
      __PROD__: JSON.stringify(false),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
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

export default merge<Partial<Configuration>>(commonConfig, config);
