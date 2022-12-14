import leave from './leave.js'
leave()
import createUser from './registration.js'
import message from './message.js'
message()

const usernameInput = document.querySelectorAll('input')[0]
const passwordInput = document.querySelectorAll('input')[1]
const loginButton = document.querySelector('.login')
const signupButton = document.querySelector('.signup')

const user = {
    name: usernameInput,
    password: passwordInput
}

function check() {
    function checkLoginButton() {
        if (loginButton === null) {
            return
        }   else {
            loginButton.addEventListener('click', logIn)
            document.addEventListener('keydown', keydownLogIn)
        }
    }
    checkLoginButton()

    function checkSignupButton() {
        if (signupButton === null) {
            return
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
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {

            let u = JSON.parse(localStorage[key])
            if (u.name === usernameInput.value && u.password === passwordInput.value) {
                window.location = 'http://127.0.0.1:5500/index.html'
                localStorage.setItem('currentUser', u.name)
            }   else console.log('Enter valid authorization data!')
        }
    }
}

function getProfileData() {
    const name = document.querySelector('.user__name')

    if (name === null) {
        return
    }   else name.textContent = localStorage.getItem('currentUser')
}
getProfileData()