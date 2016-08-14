const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function(paths) {
  return {
    entry: {
      app: paths.script,
      style: paths.style
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: paths.mainTemplate,
        filename: 'index.html'
      })
    ],
    resolve: {
      extensions: ['', '.js']
    }
  };
};
