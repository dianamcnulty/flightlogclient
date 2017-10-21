const flightAjax = require('../API/flightapi')
const getFormFields = require(`../../../lib/get-form-fields`)
const addFlightUi = require('../flightUI/addflightUI')
// const views = require('../nav/views')

const newFlightBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('sumbitting the add form', this)
  flightAjax.newFlightRequest(data)
    .then(addFlightUi.newFlightSuccess, addFlightUi.newFlightFailure)
}

module.exports = {
  newFlightBehavior
}
