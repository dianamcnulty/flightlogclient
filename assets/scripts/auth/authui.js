const store = require('../store')
const view = require('../views')

const signUpSuccess = function (data) {
  console.log('signed up successfully', store)
  $('#signupmessage').text('Thanks for signing up! Enter your new user name and password to log in.')
  $('.error').hide()
  $('#sign-up').hide()
  $('#loginmessage').hide()
  $('.login').val('')
  // console.log(data)
}
const signUpFail = function () {
  $('#auth-error').hide()
  $('#auth-error').fadeIn(200)
}
const logInFail = function () {
  $('#auth-error').hide()
  $('#auth-error').fadeIn(200)
  $('#sign-up').show()
  $('.login').val('')
}
const logInSuccess = function (data) {
  store.user = data.user
  view.landingView()
}
const logOutSuccess = function (data) {
  store.user = null
  // console.log('logged out successfully')
  $('#auth').show()
  $('#sign-up').show()
  $('#signupmessage').show()
  $('.error').hide()
  $('.login').val('')
  $('loginmessage').show()
}
const passwordSuccess = function (data) {
  // console.log('password changed successfully')
  $('#password-message').text('Your password has beeen updated. Please use your new password next time you log in.')
  $('#password-update').hide()
  $('#oldpass').val('')
  $('#newpass').val('')
}
const passwordFail = function () {
  $('#password-message').text('uh oh... your password update didn\'t process. Please Try again')
  $('#password-message').hide()
  $('#password-message').fadeIn(200)
}
module.exports = {
  signUpSuccess,
  signUpFail,
  logInSuccess,
  logOutSuccess,
  passwordSuccess,
  passwordFail,
  logInFail
}
