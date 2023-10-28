const cp = require('child_process');
const fse = require('fs-extra');
const path = require('path');
const makeHtml = require('./makeHtml');
const analyzePng = require('./visual-analysis').analyzePng;

module.exports.makeTheGif = async function(settings) {
  let filePath = settings.inputFile || settings._[0];
  const normFilePath = filePath.replace(/ /g, "_");

  if (!settings.outputFolder) {
    settings.outputFolder = path.dirname(filePath);
  }

  const gifBasename = path.basename(normFilePath, path.extname(filePath));
  const palettePath = path.join(settings.outputFolder, `${gifBasename}_palette.png`);
  const gifPath = path.join(settings.outputFolder, `${gifBasename}_${settings.height}.gif`);
  const htmlPath = path.join(settings.outputFolder, `${gifBasename}_index.html`);

  cp.spawnSync(settings.ffmpegPath, ['-i', filePath, '-vf', 'palettegen', palettePath]);
  cp.spawnSync(settings.ffmpegPath, ['-i', filePath, '-i', palettePath, '-vf', `scale=${settings.width}:${settings.height}`, '-y', gifPath]);

  if (settings.html) {
    const htmlContent = makeHtml(gifPath, palettePath, JSON.stringify(settings, null, 4));
    fse.writeFileSync(htmlPath, htmlContent, 'utf-8');
    cp.spawnSync('open', [htmlPath]);
  }

  const pixelDataArray = await analyzePng(palettePath);

  console.log(JSON.stringify(pixelDataArray));
  console.log("htmlPath: " + htmlPath);
};
