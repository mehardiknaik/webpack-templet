import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import merge from 'webpack-merge';
import commonConfig from './webpack.config.common';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import pkg from './package.json';

const SEPERATE_FOLDERS = true;

const config: Configuration = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: `${SEPERATE_FOLDERS ? 'chunk/' : ''}[name].[contenthash].js`,
    hashDigestLength: 7,
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: `${SEPERATE_FOLDERS ? 'fonts/' : ''}[name].[hash:5][ext]`
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: `${SEPERATE_FOLDERS ? 'images/' : ''}[name].[hash:5][ext]`
        }
      },
      {
        test: /\.module\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
                localIdentName: '[hash:5]',
                exportLocalsConvention: 'camelCase'
              }
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /\.module\.(css|scss)$/
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      cacheGroups: {
        common: {
          chunks: 'all',
          minChunks: 2,
          priority: -10,
          reuseExistingChunk: true,
          enforce: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          name(module) {
            const match = module.context?.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            );

            const packageName = match?.[1]?.replace('@', '');

            return `npm.${packageName}`;
          }
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: [/config\.js$/],
        extractComments: false,

        terserOptions: {

          compress: {
            passes: 2,
            drop_debugger: true,
            dead_code: true,
            unused: true,
            keep_fargs: false,
            hoist_props: true,
            collapse_vars: true,
            reduce_vars: true
          },

          mangle: true,

          format: {
            comments: false
          }
        }
      }),
      new CssMinimizerPlugin()
    ],
    usedExports: true,
    sideEffects: true,
    providedExports: true,
    innerGraph: true,
    concatenateModules: true
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: `${SEPERATE_FOLDERS ? 'css/' : ''}[name].[contenthash].css`
    }),
    new DefinePlugin({
      __DEV__: JSON.stringify(false),
      __PROD__: JSON.stringify(true),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
      __VERSION__: JSON.stringify(pkg.version),
      __REACT_DEVTOOLS_GLOBAL_HOOK__: JSON.stringify(false)
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static'
    })
  ]
};

export default merge<Partial<Configuration>>(commonConfig, config);
