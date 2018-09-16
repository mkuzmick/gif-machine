#!/usr/bin/env node

var yargs = require('yargs').argv;
var defaults = require('./modules/defaults');
var gifMachine = require('./index');
var cliTools = require('./modules/cli-tools');

cliTools.printTitle('gifMachine');

if (yargs.config) {
  cliTools.setConfig(yargs, defaults);
} else {
  var jobSettings = cliTools.mergeSettings(yargs, defaults);
  console.log("Performing a job with the following settings:");
  cliTools.printJson(jobSettings);
  gifMachine.makeGif(jobSettings)
    .then(()=>console.log("done."));
}
