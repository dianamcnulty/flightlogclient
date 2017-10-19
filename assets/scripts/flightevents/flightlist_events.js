const showFlightsTemplate = require('../templates/flight-table.handlebars')
const flightAjax = require('../API/flightapi')

const getFlightsSuccess = function (data) {
  console.log(data)
  const showFlightTable = showFlightsTemplate({ flights: data.flights })
  $('#flight-table-contents').append(showFlightTable)
  $('.edit').on('click', editFlightBehavior)
}

const listFlightsBehavior = function () {
  event.preventDefault()
  flightAjax.getAllFlights()
    .then(getFlightsSuccess)
    .catch(console.log('flight list failed'))
}
const editFlightBehavior = function () {
  console.log('clicked edit', event.target.dataset.id)
  const id = event.target.dataset.id
  // event.target.dataset.id === id of the flight
  flightAjax.getOneFlight(id)
    .then((data) => { console.log('flight success!', data) })
    .catch(console.log('whoops error getting the flight'))
}
module.exports = {
  listFlightsBehavior
}
