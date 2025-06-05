import { Configuration, ProvidePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';

const config: Configuration = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx|mjs)$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      configScript: `<script src="config.js"></script>`
    }),
    new ProvidePlugin({
      React: 'react'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
    }),
    new DotenvWebpackPlugin({
      defaults: true,
      allowEmptyValues: true,
      safe: true
    })
  ]
};

export default config;
