#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI too
import chalk from 'chalk';
import boxen from 'boxen';

// const boxen = require('boxen');

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
    labelSchool: chalk.white.bold('Education:'),
    school: chalk.white('Information Systems (Biz Analytics + AI) @ SMU'),
	labelWork: chalk.white.bold('    Work:'),
	work: chalk.white('Applied ML Research Assistant @ SMU'),
	labelGitHub: chalk.white.bold('  GitHub:'),
	github: chalk.gray('https://github.com/') + chalk.green('bnb'),
	labelLinkedIn: chalk.white.bold('LinkedIn:'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('sriya-n9103'),
	labelCard: chalk.white.bold('    Card:'),
	npx: `${chalk.red('npx')} ${chalk.white('sriya')}`,
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const schooling = `${data.labelSchool}  ${data.school}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading + 
	newline +
	newline + 
    schooling +
    newline +
	working +
	newline + 
	githubing +
	newline + 
	linkedining +
	newline + 
	newline + 
	carding; 

console.log(chalk.green(boxen(output, options)))