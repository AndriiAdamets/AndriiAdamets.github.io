module.exports = function() {
  return {
    module: {
      loaders: [
        {
          test: '*.pug$',
          loader: 'pug'
        }
      ]
    }
  };
};
