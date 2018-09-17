global.__basedir = __dirname;
var makeTheGif = require('./modules/gif-maker').makeTheGif;

const makeGif = async function (settings) {
  await makeTheGif(settings);
}

module.exports.makeGif = makeGif;
