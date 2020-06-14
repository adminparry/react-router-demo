const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		index:{

		}
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.js$/,
				loader: 'jsx-loader?harmony'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.js|jsx$/,
				loader: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
				include: path.join(__dirname, 'js'),
			}
		]
	},
	resolve: {
		extensions: ['.js', '.json', '.scss']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
	],
	devServer:{
		contentBase: './dist'
	},
	resolve:{
		alias:{
			'@': path.join('src', __dirname)
		}
	}
}