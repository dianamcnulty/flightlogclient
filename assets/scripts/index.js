'use strict'
const authevents = require('./auth/authevents')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const view = require('./views')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  authevents.clickHandlers()
  view.preLogInView()
})
