const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fse = require('fs-extra');
var pkg = require('../package.json');
// var configurator = require('../modules/configurator');
var Configstore = require('configstore');
var conf = new Configstore(pkg.name);
var cp = require("child_process");

exports.handleYargs = function(yargs, defaults){
  return ({...defaults, ...yargs});
}

exports.printTitle = function(title){
  clear();
  console.log('\n' +
    chalk.bold.magenta(
      figlet.textSync(title, { horizontalLayout: 'full'})
    ) + '\n\n'
  );
}

exports.getDefaults = function(){
  var defaults = conf.all
  return defaults;
}

exports.printJson = function(obj){
  console.log(JSON.stringify(obj, null, 4));
}
