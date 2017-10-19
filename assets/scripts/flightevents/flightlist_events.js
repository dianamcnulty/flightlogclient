const showFlightsTemplate = require('../templates/flight-table.handlebars')
const flightAjax = require('../API/flightapi')

const getFlightsSuccess = function (data) {
  console.log(data)
  const showFlightTable = showFlightsTemplate({ flights: data.flights })
  $('#flight-table-contents').append(showFlightTable)
}
const listFlightsBehavior = function () {
  event.preventDefault()
  flightAjax.getAllFlights()
    .then(getFlightsSuccess)
    .catch(console.log('flight list failed'))
}

module.exports = {
  listFlightsBehavior
}
