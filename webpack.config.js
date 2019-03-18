const Path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {

	mode: 'production',

	entry: './index.js',

	output: {

		filename: '[name].js',

		path: Path.resolve( __dirname, 'dist' ),

		libraryTarget: 'commonjs2'

	},

	optimization: {

		minimize: true

	},

	module: {

		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										esmodules: false
									}
								}
							]
						]
					},
				},
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/
			}
		]

	},

	plugins: [
		new VueLoaderPlugin()
	],

	externals: {
	}
}
