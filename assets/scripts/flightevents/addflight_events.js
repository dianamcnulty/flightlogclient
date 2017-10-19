const flightAjax = require('../API/flightapi')
const getFormFields = require(`../../../lib/get-form-fields`)
const views = require('../nav/views')

const newFlightSuccess = function () {
  console.log('success')
  $('.flight-input').val('')
  views.landingView()
  $('#section-header').text('Your flight has been added successfully')
}
const newFlightBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  flightAjax.newFlightRequest(data)
    .then(newFlightSuccess)
    .catch(console.log('why is this happpeniiiiiings??'))
}

module.exports = {
  newFlightBehavior
}
