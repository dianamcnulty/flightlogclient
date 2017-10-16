const preLogInView = function () {
  $('#logout').hide()
  $('#auth').show()
  $('#sign-up').hide()
  $('.alert').hide()
  $('#loginmessage').show()
  $('#show-password-form').hide()
  $('#password-update').hide()
  $('#flight-table-contents').hide()
}
const landingView = function () {
  $('#logout').show()
  $('#auth').hide()
  $('.alert').text('')
}
module.exports = {
  preLogInView,
  landingView
}
