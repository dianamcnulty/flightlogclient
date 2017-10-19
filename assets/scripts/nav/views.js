const flightListEvents = require('../flightevents/flightlist_events')
const preLogInView = function () {
  $('#logout').hide()
  $('#auth').show()
  $('#sign-up').hide()
  $('#auth-error').hide()
  $('#loginmessage').show()
  $('#password-update').hide()
  $('#flight-table-contents').hide()
  $('#navbar').hide()
  $('#stats-view').hide()
  $('#password-update').hide()
  $('#sign-up-link').show()
  $('#pg-sketch').show()
  $('#flight-table-contents').hide()
  $('#add-flights-view').hide()
  $('#section-header').text('')
}
const landingView = function () {
  $('#logout').show()
  $('#auth').hide()
  $('#stats-view').hide()
  $('.alert').text('')
  $('#navbar').show()
  $('#flight-table-contents').hide()
  $('#section-header').text('')
}
const profileView = function () {
  $('#password-update').show()
  $('#pg-sketch').hide()
  $('#flight-table-contents').hide()
  $('#add-flights-view').hide()
  $('#stats-view').hide()
  $('#section-header').text('Update Profile Information')
}
const showFlightsView = function () {
  console.log('clicked the view button')
  $('#password-update').hide()
  $('#pg-sketch').hide()
  $('#stats-view').hide()
  $('#flight-table-contents').show()
  $('#add-flights-view').hide()
  $('#section-header').text('Your Flight History')
  flightListEvents.listFlightsBehavior()
}
const addFlightsView = function () {
  console.log('clicked the add button')
  $('#password-update').hide()
  $('#pg-sketch').hide()
  $('#flight-table-contents').hide()
  $('#add-flights-view').show()
  $('#section-header').text('Add a Flight')
  $('#stats-view').hide()
}
const statView = function () {
  $('#stats-view').show()
  $('#password-update').hide()
  $('#pg-sketch').hide()
  $('#add-flights-view').hide()
  $('#flight-table-contents').hide()
  $('#section-header').text('Your Stats')
}

module.exports = {
  preLogInView,
  landingView,
  profileView,
  showFlightsView,
  addFlightsView,
  statView
}
