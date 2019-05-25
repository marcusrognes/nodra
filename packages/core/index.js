const util = require('util');
const chalk = require('chalk');

const VERBOSITY_LEVELS = {
	ERROR: 0,
	INFO: 1,
	DEBUG: 2,
	VERBOSE: 3,
};

const debug = (message, verbosity = 0) => {
	if (process.env.VERBOSITY < verbosity) {
		return;
	}

	if (typeof message == 'string') {
		console.log(message);
	} else {
		console.log(util.inspect(message, false, null, true /* enable colors */));
	}
};

module.exports = {
	log: console.log,
	exit: process.exit,
	debug,
	VERBOSITY_LEVELS,
	highlight: chalk.bold.underline,
	error: chalk.bold.underline.red,
};
