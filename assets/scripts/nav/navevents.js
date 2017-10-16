const views = require('./views')

const navClickHandlers = function () {
  $('#nav-user').on('click', views.profileView)
}

module.exports = {
  navClickHandlers
}
