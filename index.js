#!/usr/bin/env node
global.__basedir = __dirname;
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
var yargs = require('yargs').argv;
var makeTheGif = require('./modules/gif-maker')

const makeGif = async function (yargs) {
  clear();
  console.log(
    chalk.bold.magenta(
      figlet.textSync('gifMachine', { horizontalLayout: 'full'})
    ) + '\n\n'
  );
  console.log("yargs are: ");
  console.log(chalk.magenta(JSON.stringify(yargs, null, 4)));
  testFunction(1, 2)
}

module.exports.makeGif = gifMachine;
// export default gifMachine;
