const $ = require('jquery')
const apiUrl = 'https://color-swatch-api.herokuapp.com/'
const dataColors = require('./data/colors')
const ajaxReq = require('./ajax-requests')

const makeSwatches = (colors, allColorWords) => {
  Object.keys(colors).forEach((color) => {
    $('article.colorized-text').append(`<div class="swatch" style="background-color:${dataColors[color]}"></div>`)
  })
  allColorWords.forEach((word) => {
    $.post(`${apiUrl}/api/v1/colors`, { color: { value: word } })
  })
}


module.exports = {
  makeSwatches
}
