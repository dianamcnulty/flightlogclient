const preLogInView = function () {
  $('#logout').hide()
  $('#auth').show()
  $('.alert').hide()
  $('#loginmessage').show()
  $('#show-password-form').hide()
  $('#password-update').hide()
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
