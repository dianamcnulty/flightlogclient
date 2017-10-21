const views = require('../nav/views')

const newFlightSuccess = function (response) {
  console.log('flight API success', response)
  $('.flight-input').val('')
  views.landingView()
  $('#section-header').text('Your flight has been added successfully')
}
const newFlightFailure = function (err) {
  console.log('failure was triggered', err)
  $('#section-header').text('Add a Flight')
  $('#section-alerts').hide()
  $('#section-alerts').text("Uh...Oooooohhh... That flight didn't save. Please check your fields and try again. Date and Time are required.")
  $('#section-alerts').fadeIn(200)
}
module.exports = {
  newFlightSuccess,
  newFlightFailure
}
