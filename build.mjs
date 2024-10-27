// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
const data = {
	name: chalk.white('           Sriya Nannapaneni'),
	handle: chalk.white('@sriyanope'),
	labelWork: chalk.white.bold('    Currently working as:'),
	work: chalk.white('Applied ML Research Assistant @ SMU'),
	labelGitHub: chalk.white.bold('  GitHub:'),
	github: chalk.gray('https://github.com/') + chalk.green('bnb'),
	labelLinkedIn: chalk.white.bold('LinkedIn:'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('sriya-n9103'),
	labelCard: chalk.white.bold('    Card:'),
	npx: `${chalk.red('npx')} ${chalk.white('sriyanope')}`,
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading + // data.name + data.handle
	newline +
	newline + // Add one whole blank line
	working +
	newline + // working 
	npming +
	newline + // data.labelnpm + data.npm
	githubing +
	newline + // data.labelGitHub + data.github
	linkedining +
	newline + // data.labelLinkedIn + data.linkedin
	newline + // data.labelWeb + data.web
	carding; // data.labelCard + data.npx

writeFileSync(
	join(import.meta.dirname, 'bin/output'),
	chalk.green(boxen(output, options)),
);
