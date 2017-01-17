module.exports = {
  entry: './index.js',
  output: {
    filename: './build/app-bundle.js',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        fix: true,
        failOnError: true,
      },
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
};
