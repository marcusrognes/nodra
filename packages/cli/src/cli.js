import { Command } from 'commander';
import packageData from '../package.json';

import NewCommand from './commands/new';
import BuildCommand from './commands/build';

export function cli(argv) {
	const program = new Command();

	process.env.VERBOSITY = 3;

	program.version(packageData.version, '-v , --version');

	NewCommand(program);
	BuildCommand(program);

	program.parse(process.argv);

	if (!program.args.length) {
		program.help();
	}
}
