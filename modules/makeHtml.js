const handlebars = require('handlebars');

var source = `
  <style>
    h1 {
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
    <h1>gifMachine</h1>
    <div class="gif-wrap">
      <p>Output: your gif = {{gif}}.</p>
      <img class='gif' src={{gif}}></img>
      <p>Your palette = {{palette}}.</p>
      <img class='palette' src={{palette}}></img>
      <p>Delete them if you wish, but then this page won't work.</p>
    </div>
  </body>
`

var template = handlebars.compile(source);

function makeHtml(gif, palette){
  var result = template({
    gif: gif,
    palette: palette
  });
  console.log(result);
  return result
}

module.exports = makeHtml;
