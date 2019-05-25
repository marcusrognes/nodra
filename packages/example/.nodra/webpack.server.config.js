const { webpackShared, nodeExternals, webpack } = require('@nodra/build');
const path = require('path');

module.exports = {
	...webpackShared,
	devtool: 'sourcemap',
	entry: {
		index: './src/server/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist/server'),
		filename: '[name].js',
		libraryTarget: 'commonjs',
	},
	target: 'node',
	externals: nodeExternals({
		exclude: ['./src/server/server.js'],
	}),
	plugins: [],
};
