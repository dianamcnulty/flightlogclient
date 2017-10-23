const flightListEvents = require('../flightevents/flightlist_events')
const flightStatEvents = require('../flightevents/stats_events')
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
  $('#section-alerts').text('')
}
const landingView = function () {
  $('#logout').show()
  $('#auth').hide()
  $('#stats-view').hide()
  $('#auth-error').hide()
  $('#navbar').show()
  $('#flight-table-contents').hide()
  $('#section-header').text('Did you have good flight?')
  $('#section-alerts').text('')
}
const profileView = function () {
  $('#password-update').show()
  $('#pg-sketch').hide()
  $('#flight-table-contents').hide()
  $('#add-flights-view').hide()
  $('#stats-view').hide()
  $('#section-header').text('Update Profile Information')
  $('#section-alerts').text('')
}
const showFlightsView = function () {
  $('#password-update').hide()
  $('#pg-sketch').hide()
  $('#stats-view').hide()
  $('#flight-table-contents').show()
  $('#add-flights-view').hide()
  $('#section-header').text('Your Flight History')
  $('#section-alerts').text('')
  flightListEvents.listFlightsBehavior()
}
const addFlightsView = function () {
  $('#password-update').hide()
  $('#pg-sketch').hide()
  $('#flight-error').hide()
  $('#flight-table-contents').hide()
  $('#add-flights-view').show()
  $('#section-header').text('Add a Flight')
  $('#section-alerts').text('')
  $('#stats-view').hide()
}
const statView = function () {
  $('#stats-view').show()
  $('#password-update').hide()
  $('#pg-sketch').hide()
  $('#add-flights-view').hide()
  $('#flight-table-contents').hide()
  $('#section-header').text('Your Stats')
  $('#section-alerts').text('')
  flightStatEvents.setStats()
}

module.exports = {
  preLogInView,
  landingView,
  profileView,
  showFlightsView,
  addFlightsView,
  statView
}
