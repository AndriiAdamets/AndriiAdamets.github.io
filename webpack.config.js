var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var validate = require('webpack-validator');

var PATHS = {
  mainTemplate: path.join(__dirname, 'src/templates/index.pug'),
  script: path.join(__dirname, 'src/scripts/index.js'),
  style: path.join(__dirname, 'src/styles/style.scss'),
  build: path.join(__dirname, 'build/')
};

var clean = require('./config/webpack/clean');
var styles = require('./config/webpack/styles');
var templates = require('./config/webpack/templates');
var common = require('./config/webpack/common');
var devServer = require('./config/webpack/dev-server');

var config = merge(
  {
    output: {
      path: PATHS.build,
      publicPath: '/',
      filename: '[name].js'
    }
  },
  clean(PATHS.build),
  common(PATHS),
  styles(),
  templates()
);

if (process.env.npm_lifecycle_event === 'start') {
  config = merge(config, devServer({
    host: '0.0.0.0',
		port: '3000',
		outputPath: PATHS.build + '/'
  }));
}


module.exports = validate(config);
