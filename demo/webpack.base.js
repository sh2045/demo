const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          reportFiles: ['src/**/*.{ts,tsx}']
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html'
    })
  ]
};
