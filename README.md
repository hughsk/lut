# lut #

![Lookup Table](https://raw.github.com/hughsk/lut/master/image.png)

Renders [RGB lookup tables](http://the-witness.net/news/2012/08/fun-with-in-engine-color-grading/) to a canvas element.

## Installation ##

``` bash
npm install lut
```

## Usage ##

`lut(red, green, blue, canvas)`

``` javascript
var lut = require('lut')
  , canvas = document.createElement('canvas')

// Defaults to 32x32x32, creating a new canvas element:
document.body.appendChild(lut())

// But you can render on top of an existing canvas,
// and specify the resolution (number of shades) for
// each colour too:
document.body.appendChild(canvas)
lut(64, 8, 128, canvas)
```