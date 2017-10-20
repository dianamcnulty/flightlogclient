const showFlightsTemplate = require('../templates/flight-table.handlebars')
const editFlightsTemplate = require('../templates/edit-flight.handlebars')
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
    .then(getFlightsSuccess, function () {
      // put the 'catch here' or replace this function with that behavior
      console.log('flight list failed')
    })
}
const editFlightBehavior = function () {
  console.log('clicked edit', event.target.dataset.id)
  const id = event.target.dataset.id
  // event.target.dataset.id === id of the flight
  flightAjax.getOneFlight(id)
    .then((data) => { console.log('flight success!', data) },
      (err) => { console.log('flight fail!', err) })
}

module.exports = {
  listFlightsBehavior
}
