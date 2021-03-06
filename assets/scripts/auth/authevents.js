const getFormFields = require(`../../../lib/get-form-fields`)
const authui = require('./authui')
const api = require('../API/userapi')

const signUpBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(authui.signUpSuccess)
    .catch(authui.signUpFail)
}
const logInBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.logIn(data)
    .then(authui.logInSuccess)
    .catch(authui.logInFail)
}
const logOutBehavior = function () {
  api.logOut()
    .then(authui.logOutSuccess)
    .catch(() => $('#password.message').text('Whoops, there was an error logging out. Please try that again.'))
}
const passwordBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updatePassword(data)
    .then(authui.passwordSuccess)
    .catch(authui.passwordFail)
}
const clickHandlers = function () {
  $('#sign-up').on('submit', signUpBehavior)
  $('#log-in').on('submit', logInBehavior)
  $('#logout').on('click', logOutBehavior)
  $('#password-update').on('submit', passwordBehavior)
  $('#sign-up-link').on('click', () => {
    $('#sign-up-link').hide()
    $('#auth-error').hide()
    $('#sign-up').show()
  })
}
module.exports = {
  clickHandlers // need to import to index, then call this function at ready
}
