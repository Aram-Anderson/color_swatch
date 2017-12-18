import './stylesheets/styles.scss'
import COLORS from './data/colors'
const $ = require('jquery')
const ajaxReq = require('./ajax-requests')


$(document).ready(() => {
  ajaxReq.getTopColor();
})
