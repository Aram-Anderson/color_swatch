const $ = require('jquery')
const apiUrl = 'https://color-swatch-api.herokuapp.com/'
const handler = require('./response-handlers')

const getTopColor = () => {
  $.get(`${apiUrl}/api/v1/top_color`)
  .then((data) => {
    handler.topColor(data)
  })
}

module.exports = {
  getTopColor
}
