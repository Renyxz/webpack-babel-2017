// This config file was initially generated with webpack-cli

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // For production only

module.exports = {
	entry: './src/index',

	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'build'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			},
			{
				test: /\.css$/,

				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				  })
			}
		]
	},

	plugins: [
		// new UglifyJSPlugin(), // For production only
		new ExtractTextPlugin('./assets/css/styles.css'),
		new CleanWebpackPlugin(['build']), // Make sure to comment out this plugin when running webpack-dev-server else it will delete the build folder!
		new HtmlWebpackPlugin({
		  template: './src/index.html'
		})
	]
};
