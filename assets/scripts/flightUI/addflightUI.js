const views = require('../nav/views')

const newFlightSuccess = function (response) {
  $('.flight-input').val('')
  views.landingView()
  $('#section-alerts').css('color', '#565b2c')
  $('#section-alerts').text('Your flight has been added successfully')
}
const newFlightFailure = function () {
  $('#section-header').text('Add a Flight')
  $('#section-alerts').hide()
  $('#section-alerts').css('color', '#a33900')
  $('#section-alerts').text("Uh...Oooooohhh... That flight didn't save. Please check your fields and try again. Date and Time are required.")
  $('#section-alerts').fadeIn(200)
}
module.exports = {
  newFlightSuccess,
  newFlightFailure
}
