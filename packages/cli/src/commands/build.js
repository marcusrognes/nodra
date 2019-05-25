import { log, debug, VERBOSITY_LEVELS, exit, highlight, error } from '@nodra/core';
import { Build, GetProjectWebpackConfig } from '@nodra/build';
import path from 'path';
import fs from 'fs';
import glob from 'glob';

async function RunBuild({ projectLocation, targetLocation }, program) {
	if (!fs.existsSync(path.resolve(projectLocation, '.nodra'))) {
		log(`${error(path.resolve(projectLocation))} is not a nodra project`);
		exit(1);
	}

	debug(`Build: ${highlight(projectLocation)}`);
	debug(`Into: ${highlight(targetLocation)}`);

	let webpackConfig = GetProjectWebpackConfig(projectLocation);

	const { error, stats } = await Build(webpackConfig, {
		targetLocation,
	});

	if (error) {
		debug(error);

		exit(1);
	}

	debug(`Build finished...`);
}

export default function BuildCommand(program) {
	program
		.command('build')
		.alias('b')
		.option('-d, --dir <dir>', 'Change output directory')
		// TODO: Might implement this
		//.option('-p, --project <project>', 'Project directory directory')
		.description('builds the current nodra project into an executable node bundle')
		.action(async (dir, project, options) => {
			options = options || project || dir;

			const projectLocation = options.project || process.cwd();
			const targetLocation = options.dir || path.resolve(projectLocation, '.nodra/build');

			await RunBuild({ projectLocation, targetLocation });

			exit(0);
		});
}
