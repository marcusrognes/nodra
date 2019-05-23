import chalk from 'chalk';
import { log, exit } from '@nodra/core';

const error = chalk.bold.underline.red;
const highlight = chalk.bold.underline;

export default function NewCommand(program) {
	program
		.command('new <project-directory>')
		.alias('n')
		.description('creates a new nodra project at the given directory')
		.action(name => {
			log(`Creating new nodra project ${highlight(name)}`);

			exit(0);
		});
}
