const addFlightEvents = require('./addflight_events')

const flightClicks = function () {
  $('#new-flight-form').on('submit', addFlightEvents.newFlightBehavior)
}

module.exports = {
  flightClicks
}
