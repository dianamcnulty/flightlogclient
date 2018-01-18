const addFlightEvents = require('./addflight_events')
const flightListEvents = require('./flightlist_events')
const flightClicks = function () {
  $('#new-flight-form').on('submit', addFlightEvents.newFlightBehavior)
  $(document).on('submit', '#flight-update-form', flightListEvents.editFlight)
  $(document).on('click', '.edit', flightListEvents.editButtonBehavior)
  $(document).on('click', '.delete', flightListEvents.deleteButtonBehavior)
  $('.nevermind').on('click', () => {
    $('#confirm-delete').attr('data-id', '')
    $('#delete-modal-alert').text('')
  })
  $('#confirm-delete').on('click', flightListEvents.confirmDeleteBehavior)
  $(document).on('keyup', '#searchbar' , flightListEvents.searchTable)
}

module.exports = {
  flightClicks
}
