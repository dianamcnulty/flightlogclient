const config = require('../config')
const store = require('../store')
// pass in "data" to form
// when ajax is called set data first with this: const data = getFormFields(this)
const newFlightRequest = function (data) {
  console.log('clicked submit - data not sent', data)
  return $.ajax({
    url: config.apiOrigin + '/flights',
    // url: 'http://localhost:4741/flights',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getAllFlights = function () {
  console.log('sending get flights call')
  return $.ajax({
    url: config.apiOrigin + '/flights',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getOneFlight = function (id) {
  console.log('sending get flights call')
  return $.ajax({
    url: config.apiOrigin + '/flights/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  newFlightRequest,
  getAllFlights,
  getOneFlight
}
