// This library allows us to combine paths easily
const path = require('path');
module.exports = {
  entry: {
		ubc_ckeditor_widgets: './src/js/ubc_ckeditor_widgets.js',
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};
