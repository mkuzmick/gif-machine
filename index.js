global.__basedir = __dirname;
const chalk = require('chalk');

var makeTheGif = require('./modules/gif-maker').makeTheGif;

const makeGif = async function (settings) {
  console.log("settings are: ");
  console.log(chalk.magenta(JSON.stringify(settings)));
  makeTheGif(settings)
}

module.exports.makeGif = makeGif;
