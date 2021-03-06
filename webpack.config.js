const path = require('path')

module.exports = {
	// Defines the "entry point(s)" for the application - i.e. the file which
	// bootstraps the application
	entry: {
		richText: './public/es/rich-text.js'
	},

	// Define where and how the bundle will be output to disk
	// Note: webpack-dev-server does not write the bundle to disk, instead it is
	// kept in memory for speed
	output: {
		path: path.join(__dirname, '/public/js/es'),

		filename: '[name].js',

		// Output as UMD bundle (allows main JS to import with CJS, AMD or global
		// style code bundles
		libraryTarget: 'umd',
		// Name the exported variable from output bundle
		library: ['Frontend', '[name]']
	},

	// TODO??
	// Defines the external modules which will be stripped out when bundling for
	// the main app. These modules are already loaded in the main app environment,
	// so we strip them out to prevent conflicts.
	// externals: {},

	// Define how file types are handled by webpack
	module: {
		rules: [{
			// Ensure eslint is run before compilation with babel
			enforce: 'pre',
			test: /\.js$/,
			// Only compile application files (dependencies are in ES5 already)
			exclude: /node_modules/,
			loader: 'eslint-loader'
		}, {
			// Pass application JS files through babel-loader, compiling to ES5
			test: /\.js$/,
			// Only compile application files (dependencies are in ES5 already)
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						['env', { modules: false }]
					],
					// Configure babel-loader to cache compiled output so that subsequent
					// compile runs are much faster
					cacheDirectory: true
				}
			}]
		}]
	},

	// TODO
	// plugins: {}
}