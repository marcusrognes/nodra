import path from 'path';
import webpack from 'webpack';

const WebpackShared = {
	resolve: {
		alias: {
			cli: path.resolve(__dirname, 'src/cli/'),
			server: path.resolve(__dirname, 'src/server/'),
			client: path.resolve(__dirname, 'src/client/'),
		},
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
		],
	},
};

export default WebpackShared;
