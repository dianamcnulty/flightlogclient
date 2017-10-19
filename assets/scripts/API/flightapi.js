const config = require('../config')
const store = require('../store')

const newFlightRequest = function (flightType, date, time, distance, duration, launch, lz, wing, notes) {
  console.log('sending new flight call - token is', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/flights',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'flight': {
        'flight_type': flightType,
        'date': date,
        'time': time,
        'distance': distance,
        'duration': duration,
        'launch': launch,
        'lz': lz,
        'wing': wing,
        'notes': notes
      }
    }
  })
}

module.exports = {
  newFlightRequest
}
