const showFlightsTemplate = require('../templates/flight-table.handlebars')
const editFlightTemplate = require('../templates/edit-flight.handlebars')
const flightAjax = require('../API/flightapi')
const getFormFields = require(`../../../lib/get-form-fields`)

const getFlightsSuccess = function (data) {
  if (data.flights.length > 0) {
    const showFlightTable = showFlightsTemplate({ flights: data.flights })
    $('#flight-table-contents').html(showFlightTable)
  } else {
    $('#section-alerts').css('color', '#a33900')
    $('#section-alerts').text("Looks like you haven't added any flights yet. If you'd like to add one, just click the 'Add a Flight' button above")
  }
}

const listFlightsBehavior = function () {
  // event.preventDefault() // I think this isn't needed
  flightAjax.getAllFlights()
    .then(getFlightsSuccess)
    .catch(() => {
      $('#section-alerts').css('color', '#a33900')
      $('#section-alerts').text('Sorry, we were unable to retrieve your flight data right now. Please try again later.')
    })
}
const editFlightSuccess = function () {
  $('#edit-modal').modal('toggle') // close modal on successful update
  $('#section-alerts').css('color', '#565b2c')
  $('#section-alerts').text('Your flight was updated successfully')
  listFlightsBehavior() // refreshes the flight list.
}
const editFlight = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  data['flight']['duration'] = (parseInt(data['flight']['hrs']) + parseInt(data['flight']['min']) / 60).toFixed(2)
  flightAjax.updateFlightRequest(data)
    .then(editFlightSuccess)
    .catch(() => { $('#update-error').text('Sorry, that didn\'t work. Please try again. Please note, Date and time are required.') })
}
const getOneFlightSuccess = function (data) {
  data['flight']['hrs'] = parseInt(data['flight']['duration'])
  data['flight']['min'] = parseInt(((data['flight']['duration']) - (data['flight']['hrs'])) * 60)
  const editFlightModal = editFlightTemplate({ flight: data.flight })
  $('#edit-flight-content').html(editFlightModal)
}

const editButtonBehavior = function () {
  $('#section-alerts').text('')
  const id = event.target.dataset.id
  // event.target.dataset.id === id of the flight
  flightAjax.getOneFlight(id)
    .then(getOneFlightSuccess)
    .catch(() => { $('#edit-flight-content').html("<p class='alert'>Sorry there was an error retrieving your flight's data, please try again later.</p>") })
}

const deleteButtonBehavior = function (event) {
  // delete button needs to send ID to modal's 'confirm-delete' button
  const id = event.target.dataset.id
  $('#confirm-delete').attr('data-id', id)
}
const deleteFlightSuccess = function () {
  $('#delete-modal').modal('toggle') // close modal on successful update
  listFlightsBehavior() // refreshes the flight list.
  $('#section-alerts').text('')
  $('#section-alerts').css('color', '#565b2c')
  $('#section-alerts').text('Your flight was successfully deleted')
  $('#delete-modal-alert').text('')
}
const confirmDeleteBehavior = function (event) {
  const id = event.target.dataset.id
  flightAjax.deleteFlight(id)
    .then(deleteFlightSuccess)
    .catch(() => $('#delete-modal-alert').text('Sorry, there was an error deleting your flight, Please try again later.'))
}

module.exports = {
  listFlightsBehavior,
  editFlight,
  editButtonBehavior,
  deleteButtonBehavior,
  confirmDeleteBehavior
}
