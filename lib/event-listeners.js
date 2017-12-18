const $ = require('jquery')
const ajaxReq = require('./ajax-requests')
const handlers = require('./response-handlers')

const colorizeListener = $('button').click((event) => {
  event.preventDefault()
  let userInput = $('textarea')[0].value
  handlers.makeSwatches(userInput)
})

module.exports = {
  colorizeListener
}
