const views = require('../nav/views')

const newFlightSuccess = function () {
  console.log('success')
  $('.flight-input').val('')
  views.landingView()
  $('#section-header').text('Your flight has been added successfully')
}
module.exports = {
  newFlightSuccess
}
