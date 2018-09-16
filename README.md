# gif-machine
This is a simple ffmpeg-powered gif-maker.  

## install
Install it like so:
```
npm i -S gif-machine
```

## use
And use it like this:
```
var gifMachine = require('gif-machine');

gifMachine.makeTheGif({
  inputFile: '/path/to/my/videoclip',
  width: 960, // optional, default = 640
  height: 540, // optional, default = 360
  outputFolder: 'path/to/my/outputFolder', // optional, default = videoclip folder
  })
```
Or in the command line like this:
```
gif /path/to/my/videoclip
```
Add options with `--option=myOption`.  For instance:
```
gif /my/videoclip --html=true --keepPalette=true --outputFolder=/path/to/my/desktop
```
Will generate a gif, hold on to the palette file, and open up a nice little html page (saved to the `outputFolder`) that reveals your gif and palette to you.

## configure
If you're using the cli, it definitely makes sense to set some defaults so that you can just type `gif /path/to/my/file` (or add this as a service on your mac so you can right-click or click a shortcut key for it).  Accomplish this by entering
```
gif --config --width=480 --height=270 --html=false
```
and so on.
