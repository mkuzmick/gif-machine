var cp = require('child_process');
var fse = require('fs-extra');

module.exports.makeTheGif = function(args){
  console.log("this are the arguments hitting makeTheGif " + JSON.stringify(args, null, 4));
};

module.exports.cliArgsToConfig = async function(args){
  console.log(JSON.stringify(args));
}
