const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: [
		'./index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'wsu-icons.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.font\.js/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'webfonts-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'wsu-icons.bundle.css'
		})
	],
	devServer: {
		compress: true,
		historyApiFallback: true,
		host: 'localhost',
		hot: true,
		https: true,
		inline: true,
		port: '8080'
	}
};
