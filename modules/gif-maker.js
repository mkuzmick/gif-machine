var cp = require('child_process');
var fse = require('fs-extra');
var path = require('path');
var makeHtml = require('./makeHtml');

module.exports.makeTheGif = function(settings){
  console.log("these are the arguments hitting makeTheGif " + JSON.stringify(settings));
  var filePath;
  if (settings.inputFile) {
    filePath = settings.inputFile;
  } else {
    filePath = settings._[0]
  }
  var palettePath = path.join(settings.outputFolder,
    (path.basename(filePath) + "_palette.png"));
  var gifPath = path.join(settings.outputFolder,
    (path.basename(filePath) + '_' + settings.height
    + ".gif"));
  var htmlPath = path.join(settings.outputFolder,
    (path.basename(filePath) + "_index.html"));
  cp.spawnSync(settings.ffmpegPath, ['-i', filePath, '-vf',
    'palettegen', palettePath]);
  cp.spawnSync(settings.ffmpegPath, ['-i', filePath, '-i',
    palettePath, '-vf', ('scale=' + settings.width + ":"
    + settings.height), '-y', gifPath]);
  fse.writeFileSync(htmlPath, makeHtml(gifPath, palettePath), 'utf-8');
  cp.spawnSync('open', [htmlPath]);
  if (settings.slack==true) {

  }
};
