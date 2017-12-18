const $ = require('jquery')
const dataColors = require('./data/colors')

const makeSwatches = (colors) => {
  colors.forEach((color) => {
    let html = $(`<div class='swatch' style='background-color:${dataColors[color]}></div>`)
    $('article.colorized-text')[0].append(html)
  })
}

module.exports = {
  makeSwatches
}
