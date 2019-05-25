import { log, exit, highlight, error } from '@nodra/core';

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
