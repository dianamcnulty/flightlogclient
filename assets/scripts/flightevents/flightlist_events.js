const showFlightsTemplate = require('../templates/flight-table.handlebars')
const editFlightTemplate = require('../templates/edit-flight.handlebars')
const flightAjax = require('../API/flightapi')
const getFormFields = require(`../../../lib/get-form-fields`)

// 6. updates the page with results of index call. (refreshes the list after edit and delete.)
const getFlightsSuccess = function (data) {
  if (data.flights.length > 0) {
    const showFlightTable = showFlightsTemplate({ flights: data.flights })
    $('#flight-table-contents').html(showFlightTable)
  } else {
    $('#section-alerts').css('color', '#a33900')
    $('#section-alerts').text("Looks like you haven't added any flights yet. If you'd like to add one, just click the 'Add a Flight' button above")
  }
}

// 5. sends API request to get list of flights.
const listFlightsBehavior = function () {
  // event.preventDefault() // I think this isn't needed
  flightAjax.getAllFlights()
    .then(getFlightsSuccess)
    .catch(() => {
      $('#section-alerts').css('color', '#a33900')
      $('#section-alerts').text('Sorry, we were unable to retrieve your flight data right now. Please try again later.')
    })
}
// 4. closes modal and gives success message.
const editFlightSuccess = function () {
  $('#edit-modal').modal('toggle') // close modal on successful update
  $('#section-alerts').css('color', '#546819')
  $('#section-alerts').text('Your flight was updated successfully')
  listFlightsBehavior() // refreshes the flight list.
}

// 3. this happens when sumbit button is clicked for edit form.
const editFlight = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  data['flight']['duration'] = (parseInt(data['flight']['hrs']) + parseInt(data['flight']['min']) / 60).toFixed(2)
  flightAjax.updateFlightRequest(data)
    .then(editFlightSuccess)
    .catch(() => { $('#update-error').text('Sorry, that didn\'t work. Please try again. Please note, Date and time are required.') })
}
// 2. success from 'show' gets data to  populate the edit form.
// duration is changed to hr/min format. then sent to template
const getOneFlightSuccess = function (data) {
  data['flight']['hrs'] = parseInt(data['flight']['duration'])
  data['flight']['min'] = parseInt(((data['flight']['duration']) - (data['flight']['hrs'])) * 60)
  const editFlightModal = editFlightTemplate({ flight: data.flight })
  $('#edit-flight-content').html(editFlightModal)
}

// 1. when user clicks edit button.
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
  $('#section-alerts').css('color', '#546819')
  $('#section-alerts').text('Your flight was successfully deleted')
  $('#delete-modal-alert').text('')
}
const confirmDeleteBehavior = function (event) {
  const id = event.target.dataset.id
  flightAjax.deleteFlight(id)
    .then(deleteFlightSuccess)
    .catch(() => $('#delete-modal-alert').text('Sorry, there was an error deleting your flight, Please try again later.'))
}
const searchTable = function() {
  let input = document.getElementById("searchbar"); //doesn't seem to work with jquery..
  let filter = input.value.toUpperCase();
  let table = document.getElementById("flight-table");
  let row1 = table.getElementsByClassName("row1");
  let row2 = table.getElementsByClassName("row2");// need to have a row 2 array to match, as each of my flights takes up 2 rows
  for (let i = 0; i < row1.length; i++) {
    let launchLocation = row1[i].getElementsByTagName("td")[2];
    let landingLocation = row1[i].getElementsByTagName("td")[3];
    if (launchLocation || landingLocation) {
      if ((launchLocation.innerHTML.toUpperCase().indexOf(filter) > -1) || (landingLocation.innerHTML.toUpperCase().indexOf(filter) > -1)){
        row1[i].style.display = "";
        row2[i].style.display = "";//include row 2 so 'notes, edit, etc show up'
      } else {
        row1[i].style.display = "none";
        row2[i].style.display = "none";
      }
    }
  }
}
module.exports = {
  listFlightsBehavior,
  editFlight,
  editButtonBehavior,
  deleteButtonBehavior,
  confirmDeleteBehavior,
  searchTable
}
