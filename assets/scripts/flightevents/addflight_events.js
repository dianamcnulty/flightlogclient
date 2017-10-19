const flightAjax = require('../API/flightapi')
const getFormFields = require(`../../../lib/get-form-fields`)
const newFlightBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('I clicked new flight submit', data)
  flightAjax.newFlightRequest(data)
    .then(console.log('winner!!'))
    .catch(console.log('darn!, didnt work.'))
}

module.exports = {
  newFlightBehavior
}
