const flightAPI = require('../API/flightapi')
const setStats = function () {
  $('#flight-count').text('')
  $('#site-count').text('')
  $('#hour-sum').text('')
  flightAPI.getAllFlights()
    .then((data) => {
      $('#flight-count').text(data.flights.length)
      $('#hour-sum').text(calculateHours(data))
      $('#site-count').text()
    })
    .catch(() => {
      ('#section-alerts').text('Sorry, there was an error retrieving your flight stats. Please try again later.')
    })
}
const calculateHours = function (data) {
  const flights = data.flights
  let total = 0
  console.log(data.flights)
  for (let i = 0; i < flights.length; i++) {
    if (flights[i]['duration']) {
      // console.log(flights[i]['duration'])
      total += flights[i]['duration']
    // } else {
    //   console.log('no duration')
    }
  }
  return total
}
module.exports = {
  setStats
}
