#!/usr/bin/env node

var yargs = require('yargs').argv;
var defaults = require('./modules/defaults');
var gifMachine = require('./index');
var cliTools = require('./modules/cli-tools');
var settings = cliTools.handleYargs(yargs, defaults);

cliTools.printTitle('gifMachine');
console.log("settings:");
cliTools.printJson(settings);

if (yargs.settings) {
  cliTools.setDefaults(yargs);
}

gifMachine.makeGif(settings);
