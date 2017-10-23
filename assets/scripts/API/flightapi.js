const config = require('../config')
const store = require('../store')

// pass in "data" to form
// when ajax is called set data first with this: const data = getFormFields(this)
const newFlightRequest = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/flights',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getAllFlights = function () {
  return $.ajax({
    url: config.apiOrigin + '/flights',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getOneFlight = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/flights/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateFlightRequest = function (data) {
  const id = parseInt(data['flight']['id'])
  return $.ajax({
    url: config.apiOrigin + '/flights/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const deleteFlight = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/flights/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  newFlightRequest,
  getAllFlights,
  getOneFlight,
  updateFlightRequest,
  deleteFlight
}
