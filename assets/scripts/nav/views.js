const preLogInView = function () {
  $('#logout').hide()
  $('#auth').show()
  $('#sign-up').hide()
  $('.alert').hide()
  $('#loginmessage').show()
  $('#password-update').hide()
  $('#flight-table-contents').hide()
  $('#navbar').hide()
  $('#password-update').hide()
  $('#sign-up-link').show()
}
const landingView = function () {
  $('#logout').show()
  $('#auth').hide()
  $('.alert').text('')
  $('#navbar').show()
}
const profileView = function () {
  $('#password-update').show()
}
module.exports = {
  preLogInView,
  landingView,
  profileView
}
