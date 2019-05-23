import { Command } from 'commander';
import packageData from '../package.json';

import NewCommand from './commands/new';

export function cli(argv) {
	const program = new Command();

	program.version(packageData.version, '-v , --version');

	NewCommand(program);

	program.parse(process.argv);

	if (!program.args.length) {
		program.help();
	}
}
