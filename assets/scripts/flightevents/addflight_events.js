const flightAjax = require('../API/flightapi')
const getFormFields = require(`../../../lib/get-form-fields`)
const addFlightUi = require('../flightUI/addflightUI')
// const views = require('../nav/views')

const newFlightBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('what comes back from getFormFields:', data)
  // console.log(data['flight']['hrs'], data['flight']['duration'])
  data['flight']['duration'] = (parseInt(data['flight']['hrs']) + parseInt(data['flight']['min']) / 60).toFixed(2)
  // console.log('after calculation', data)
  flightAjax.newFlightRequest(data)
    .then(addFlightUi.newFlightSuccess, addFlightUi.newFlightFailure)
}

module.exports = {
  newFlightBehavior
}
