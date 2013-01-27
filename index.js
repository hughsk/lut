function lut(red, green, blue, canvas) {
  var red = red || 32, green = green || 32, blue = blue || 32

  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.width = red * green
    canvas.height = blue
  }

  var r, g, b, x, y
  var ctx = canvas.getContext('2d')
    , width = red * green
    , height = blue
    , data = ctx.getImageData(0, 0, width, height)

  for (r = 0; r < red; r += 1) {
    for (g = 0; g < green; g += 1) {
      for (b = 0; b < blue; b += 1) {
        x = r + g * red
        y = b
        data.data[(x + y * width)*4    ] = 255 * (r+1) / red
        data.data[(x + y * width)*4 + 1] = 255 * (g+1) / green
        data.data[(x + y * width)*4 + 2] = 255 * (b+1) / blue
        data.data[(x + y * width)*4 + 3] = 255 // Alpha Channel
      }
    }
  }

  ctx.putImageData(data, 0, 0)

  console.log(data)

  return canvas
};

module.exports = lut