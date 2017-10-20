const showFlightsTemplate = require('../templates/flight-table.handlebars')
const editFlightTemplate = require('../templates/edit-flight.handlebars')
const flightAjax = require('../API/flightapi')
const getFormFields = require(`../../../lib/get-form-fields`)

const getFlightsSuccess = function (data) {
  console.log(data)
  const showFlightTable = showFlightsTemplate({ flights: data.flights })
  $('#flight-table-contents').html(showFlightTable)
  // $('.edit').on('click', editButtonBehavior)
}

const listFlightsBehavior = function () {
  // event.preventDefault() // I think this isn't needed
  flightAjax.getAllFlights()
    .then(getFlightsSuccess, function () {
      // put the 'catch here' or replace this function with that behavior
      console.log('flight list failed')
    })
}
const editFlightSuccess = function () {
  $('#edit-modal').modal('toggle') // close modal on successful update
  listFlightsBehavior() // refreshes the flight list.
}
const editFlight = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('sumbitting the update form', data)
  flightAjax.updateFlightRequest(data)
    .then(editFlightSuccess)
    .catch(() => { $('#update-error').text('Sorry, that didn\'t work. Please try again. Please note, Date and time are required.') })
}
const getOneFlightSuccess = function (data) {
  console.log('flight success!', data)
  const editFlightModal = editFlightTemplate({ flight: data.flight })
  $('#edit-flight-content').html(editFlightModal)
}

const editButtonBehavior = function () {
  console.log('clicked edit', event.target.dataset.id)
  const id = event.target.dataset.id
  // event.target.dataset.id === id of the flight
  flightAjax.getOneFlight(id)
    .then(getOneFlightSuccess)
    .catch(() => { console.log('flight fail!') })
}

module.exports = {
  listFlightsBehavior,
  editFlight,
  editButtonBehavior
}
