const addFlightEvents = require('./addflight_events')
const flightListEvents = require('./flightlist_events')
const flightClicks = function () {
  $('#new-flight-form').on('submit', addFlightEvents.newFlightBehavior)
  $(document).on('submit', '#flight-update-form', flightListEvents.editFlight)
  $(document).on('click', '.edit', flightListEvents.editButtonBehavior)
}

module.exports = {
  flightClicks
}
