const { makeWebpackConfig } = require('webpack-simple');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = makeWebpackConfig({
  plugins: [new HtmlWebpackPlugin({ template: 'index.template.html' })],
});
