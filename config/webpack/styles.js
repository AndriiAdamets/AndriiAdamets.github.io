module.exports = function() {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css']
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        },
        {
          test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loaders: [
            "url-loader?name=assets/fonts/[name]_[hash].[ext]"
          ]
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          loaders: [
            'url-loader?name=assets/images/[name]_[hash].[ext]&limit=10000'
          ]
        }
      ]
    }
  };
};
