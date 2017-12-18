const $ = require('jquery')
const dataColors = require('./data/colors')

const makeSwatches = (colors) => {
  colors.forEach((color) => {
    $('article.colorized-text').append(`<div class="swatch" style="background-color:${dataColors[color]}"></div>`)
  })
}

module.exports = {
  makeSwatches
}
