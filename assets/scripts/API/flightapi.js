const config = require('../config')
const store = require('../store')
// pass in "data" to form
// when ajax is called set data first with this: const data = getFormFields(this)
const newFlightRequest = function (data) {
  console.log('clicked submit - data not sent', data)
  return $.ajax({
    // url: config.apiOrigin + '/flights',
    url: 'http://localhost:4741/flights',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  newFlightRequest
}
