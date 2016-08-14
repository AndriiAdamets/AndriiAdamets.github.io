var webpack = require('webpack');
module.exports = function(options) {
  return {
    watchOptions: {
      poll: true
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      // progress: true,
      stats: 'errors-only',

      host: options.host,
      port: options.port,

      outputPath: options.outputPath

    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
};
