const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  };
};
