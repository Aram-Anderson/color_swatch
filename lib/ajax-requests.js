const $ = require('jquery')
const apiUrl = 'https://color-swatch-api.herokuapp.com/'

const getTopColor = () => {
  $.get(`${apiUrl}/api/v1/top_color`)
  .then((data) => {
    $('.top-color').append(`${data.value}, with a count of ${data.color_count}`)
  })
}

module.exports = {
  getTopColor
}
