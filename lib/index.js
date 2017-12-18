import './stylesheets/styles.scss'
import COLORS from './data/colors'
const $ = require('jquery')
const ajaxReq = require('./ajax-requests')
const listeners = require('./event-listeners')


$(document).ready(() => {
  ajaxReq.getTopColor()
  listeners.colorizeListener
})
