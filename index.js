global.__basedir = __dirname;
const makeTheGif = require('./modules/gif-maker').makeTheGif;

const makeGif = async function (settings) {
  await makeTheGif(settings);
};

module.exports.makeGif = makeGif;
