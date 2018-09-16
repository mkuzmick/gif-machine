global.__basedir = __dirname;
const chalk = require('chalk');

var makeTheGif = require('./modules/gif-maker').makeTheGif;

const makeGif = async function (yargs) {
  console.log("yargs are: ");
  console.log(chalk.magenta(JSON.stringify(yargs, null, 4)));
  makeTheGif({test: 1, again: 2})
}

module.exports.makeGif = makeGif;
