#!/usr/bin/env node

const yargs = require('yargs').argv;
const defaults = require('./modules/defaults');
const gifMachine = require('./index');
const cliTools = require('./modules/cli-tools');

cliTools.printTitle('gifMachine');

if (yargs.config) {
  cliTools.setConfig(yargs, defaults);
} else {
  const jobSettings = cliTools.mergeSettings(yargs, defaults);
  console.log("Performing a job with the following settings:");
  console.log(JSON.stringify(jobSettings, null, 2));
  gifMachine.makeGif(jobSettings)
    .then(() => console.log("done."));
}
