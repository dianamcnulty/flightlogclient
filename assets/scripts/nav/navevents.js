const views = require('./views')

const navClickHandlers = function () {
  $('#nav-add').on('click', views.addFlightsView)
  $('#nav-view').on('click', views.showFlightsView)
  $('#nav-user').on('click', views.profileView)
  $('#nav-stats').on('click', views.statView)
}

module.exports = {
  navClickHandlers
}
