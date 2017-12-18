const $ = require('jquery')

const topColor = (data) => {
  $('.top-color').append(`${data.value}, with a count of ${data.color_count}`)
}

module.exports = {
  topColor
}
