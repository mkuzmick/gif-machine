const handlebars = require('handlebars');
const querystring = require('querystring');

var source = `
  <style>
    h1 {
      text-align: center;
      font-size: 100px;
      font-weight: 900;
      font-family: "Avenir Next"
    }
    .gif-wrap {
      margin:auto;
      width: 60%;
    }

    .img {
      margin: auto
    }
    .palette {
      width: 100%;
      image-rendering: optimizeSpeed;
      image-rendering: -moz-crisp-edges;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: optimize-contrast;
      image-rendering: pixelated;
    }
  </style>
  <body>
    <div class="title">
      <h1>gifMachine</h1>
    </div>
    <div class="gif-wrap">
      <p>Output: your gif = {{gif}}.</p>
      <img class='gif' src='{{gif}}'></img>
      <p>Your palette = {{palette}}.</p>
      <img class='palette' src='{{palette}}'></img>
      <p>Delete them if you wish, but then this page won't work.</p>
    </div>
  </body>
`

var template = handlebars.compile(source);

function makeHtml(gif, palette){
  var result = template({
    gif: gif,
    palette: palette,
    gifLink: querystring.escape(gif),
    paletteLink: querystring.escape(palette)
  });
  console.log(result);
  return result
}

module.exports = makeHtml;
