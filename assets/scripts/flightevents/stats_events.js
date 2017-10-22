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
      farthestFlight(data)
      longestFlight(data)
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

const farthestFlight = function (data) {
  const flights = data.flights
  let farFlight = flights[0]
  for (let i = 1; i < flights.length; i++) {
    if (flights[i]['distance'] > farFlight['distance']) {
      farFlight = flights[i]
    }
  }
  $('#most-km').text('  ' + farFlight['distance'] + ' kms.')
  $('#farthest-date').text(farFlight['date'])
  if (farFlight['launch']) {
    $('#farthest-location').text(farFlight['launch'])
  } else {
    $('#farthest-location').text('not specified')
  }
}
const longestFlight = function (data) {
  const flights = data.flights
  let longFlight = flights[0]
  for (let i = 1; i < flights.length; i++) {
    if (flights[i]['duration'] > longFlight['duration']) {
      longFlight = flights[i]
    }
  }
  $('#most-hrs').text('  ' + longFlight['duration'] + ' hours')
  $('#longest-date').text(longFlight['date'])
  if (longFlight['launch']) {
    $('#longest-location').text(longFlight['launch'])
  } else {
    $('#longest-location').text('not specified')
  }
}
module.exports = {
  setStats
}
