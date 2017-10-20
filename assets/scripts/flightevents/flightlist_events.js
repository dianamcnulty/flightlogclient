const showFlightsTemplate = require('../templates/flight-table.handlebars')
const editFlightTemplate = require('../templates/edit-flight.handlebars')
const flightAjax = require('../API/flightapi')
const getFormFields = require(`../../../lib/get-form-fields`)

const getFlightsSuccess = function (data) {
  console.log(data)
  const showFlightTable = showFlightsTemplate({ flights: data.flights })
  $('#flight-table-contents').append(showFlightTable)
  $('.edit').on('click', editButtonBehavior)
}

const listFlightsBehavior = function () {
  event.preventDefault()
  flightAjax.getAllFlights()
    .then(getFlightsSuccess, function () {
      // put the 'catch here' or replace this function with that behavior
      console.log('flight list failed')
    })
}
const editFlight = function (event) {
  event.preventDefault()
  //const data = getFormFields(this)
  console.log('sumbitting the update form', this)
  // flightAjax.updateFlightRequest(data)
  //   .then(addFlightUi.newFlightSuccess, addFlightUi.newFlightFailure)
}
const getOneFlightSuccess = function (data) {
  console.log('flight success!', data)
  const editFlightModal = editFlightTemplate({ flight: data.flight })
  $('#edit-flight-content').append(editFlightModal)
  $('#flight-update-form').on('submit', editFlight)
}

const editButtonBehavior = function () {
  console.log('clicked edit', event.target.dataset.id)
  const id = event.target.dataset.id
  // event.target.dataset.id === id of the flight
  flightAjax.getOneFlight(id)
    .then(getOneFlightSuccess,
      (err) => { console.log('flight fail!', err) })
}

module.exports = {
  listFlightsBehavior
}
