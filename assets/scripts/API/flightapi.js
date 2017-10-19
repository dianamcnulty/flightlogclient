const config = require('../config')
const store = require('../store')
// pass in "data" to form
// when ajax is called set data first with this: const data = getFormFields(this)
const newFlightRequest = function (data) {
  console.log('sending new flight call - token is', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/flights',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
    // {
    //   'flight': {
    //     'flight_type': flightType,
    //     'date': date,
    //     'time': time,
    //     'distance': distance,
    //     'duration': duration,
    //     'launch': launch,
    //     'lz': lz,
    //     'wing': wing,
    //     'notes': notes
    //   }
    // }
  })
}

module.exports = {
  newFlightRequest
}
