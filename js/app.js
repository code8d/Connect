import leave from './leave.js'
leave()
import createUser from './registration.js'

const usernameInput = document.querySelectorAll('input')[0]
const passwordInput = document.querySelectorAll('input')[1]
const loginButton = document.querySelector('.login')
const signupButton = document.querySelector('.signup')

document.addEventListener('keydown', keydownLogIn)

const users = [{
    name: 'code8d',
    password: '1234'
}]

function check() {
    function checkLoginButton() {
        if (loginButton === null) {
            return 0
        }   else {
            loginButton.addEventListener('click', logIn)
        }
    }
    checkLoginButton()

    function checkSignupButton() {
        if (signupButton === null) {
            return 0
        }   else {
            signupButton.addEventListener('click', () => {
                createUser(usernameInput, passwordInput, users)
            })
        }
    }
    checkSignupButton()
}
check()

function keydownLogIn(e) {
    if (e.key.toLowerCase() === 'enter') {
        logIn()
    }
}

function logIn() {
    users.forEach(u => {
        
        if (u.name === usernameInput.value && u.password === passwordInput.value) {
            window.location = 'http://127.0.0.1:5500/index.html'
        }   else {
            console.log('Enter valid authorization data!')
        }
    })
}