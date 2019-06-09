import { debug, VERBOSITY_LEVELS, highlight } from '@nodra/core';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';
import glob from 'glob';

export { webpackShared } from './WebpackShared.js';

export { nodeExternals, webpack };

export function GetProjectWebpackConfig(projectLocation) {
	debug('Scanning for webpack config files.', VERBOSITY_LEVELS.INFO);

	let webpackConfigs = glob.sync(path.resolve(projectLocation, '.nodra') + '/webpack.*.config.js');

	debug(`Found: ${highlight(webpackConfigs.join(', '))}`, VERBOSITY_LEVELS.INFO);

	return webpackConfigs.map(require);
}

export async function Build(webpackConfig) {
	debug('Building with config:', VERBOSITY_LEVELS.DEBUG);
	debug(webpackConfig, VERBOSITY_LEVELS.DEBUG);

	return await new Promise(resolve => {
		webpack(webpackConfig).run((error, stats) => {
			resolve({ error, stats });
		});
	});
}
