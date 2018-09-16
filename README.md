# gif-machine
This is a simple ffmpeg-powered gif-maker.  

## install
Install it like so for a node project:
```
npm i -S gif-machine
```
Or, for cli use:
```
npm i -g gif-machine
```
Note: this will add the command `gif`
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
This will generate a gif, hold on to the palette file, and open up a nice little html page (saved to the `outputFolder`) that reveals your gif and palette to you.

## configure
If you're using the cli, it definitely makes sense to set some defaults so that you can just type `gif /path/to/my/file` (or add this as a service on your mac so you can right-click or click a shortcut key for it).  Accomplish this by entering
```
gif --config --width 480 --height 270 --html false
```
or
```
gif --config --width=480 --height=270 --html=false
```
and so on.  This will use [configstore](https://www.npmjs.com/package/configstore) to hang on to your config variables in `~/.config/configstore/gif-machine.json`.
If you ever want to delete a config setting, just enter
```
gif --config --width delete --folderPath=delete
```
etc.
