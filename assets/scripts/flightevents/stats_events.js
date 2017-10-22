const flightAPI = require('../API/flightapi')
const setStats = function () {
  $('#flight-count').text('')
  $('#site-count').text('')
  $('#hour-sum').text('')
  flightAPI.getAllFlights()
    .then((data) => {
      $('#flight-count').text(' ' + data.flights.length)
      $('#hour-sum').text(' ' + calculateHours(data))
      $('#site-count').text(' ' + calculateSites(data))
    })
    .catch(() => {
      $('#section-alerts').text('Sorry, there was an error retrieving your flight stats. Please try again later.')
    })
}
const calculateHours = function (data) {
  const flights = data.flights
  let total = 0
  console.log(data.flights)
  for (let i = 0; i < flights.length; i++) {
    if (flights[i]['duration']) {
      // console.log(flights[i]['duration'])
      total += parseFloat(flights[i]['duration'])
    // } else {
    //   console.log('no duration')
    }
  }
  const hrs = parseInt(total)
  const min = parseInt((total - hrs) * 60)
  return (hrs + ' hrs. , ' + min + ' mins.')
}

const calculateSites = function (data) {
  const flights = data.flights
  const siteList = {}
  for (let i = 0; i < flights.length; i++) {
    const launch = flights[i]['launch']
    if (siteList[launch]) {
      siteList[launch] += 1
    } else {
      siteList[launch] = 1
    }
  }
  console.log('site list is', siteList)
  const totalSites = Object.keys(siteList).length
  console.log('totalSites is', totalSites)
  return totalSites
}

module.exports = {
  setStats
}
