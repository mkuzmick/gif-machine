const getPixels = require("get-pixels");

const analyzePng = (file) => {
  return new Promise((resolve, reject) => {
    getPixels(file, (err, pixels) => {
      if (err) {
        reject(err);
        return;
      }

      const pixelDataArray = [];

      for (let i = 0; i < pixels.data.length; i += 4) {
        const pixelData = {
          index: i / 4,
          red: pixels.data[i],
          green: pixels.data[i + 1],
          blue: pixels.data[i + 2],
          alpha: pixels.data[i + 3],
        };
        pixelDataArray.push(pixelData);
      }

      resolve(pixelDataArray);
    });
  });
};

module.exports.analyzePng = analyzePng;
