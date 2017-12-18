const $ = require('jquery')
const colors = require('./data/colors')
const helpers = require('./helpers')

const topColor = (data) => {
  $('.top-color').append(`${data.value}, with a count of ${data.color_count}`)
}

const makeSwatches = (userInput) => {
  let wordArray = userInput.replace(/\./g, ' ').toLowerCase().split(' ')
  let allColorWords = []
  let filteredWords = {}
  wordArray.forEach((word) => {
    if (colors.hasOwnProperty(word)) {
      allColorWords.push(word)
      if (filteredWords[word]){
        filteredWords[word] += 1
      }
      else {
        filteredWords[word] = 1
      }
    }
  })
  helpers.makeSwatches(filteredWords, allColorWords)
}

module.exports = {
  topColor,
  makeSwatches
}
