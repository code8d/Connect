import leave from './leave.js'
leave()

const usernameInput = document.querySelectorAll('input')[0]
const passwordInput = document.querySelectorAll('input')[1]
const loginButton = document.querySelector('.login')

loginButton.addEventListener('click', logIn)
document.addEventListener('keydown', keydownLogIn)

const users = [{
    name: 'code8d',
    password: '1234'
}]

function createUser() {
    if (usernameInput.value.length === 0 && passwordInput.value.length === 0) {
        usernameInput.classList.add('active')
        usernameInput.placeholder = 'Enter username'
        passwordInput.classList.add('active')
        passwordInput.placeholder = 'Enter password'
        
        setTimeout(() => {
            usernameInput.classList.remove('active')
            usernameInput.placeholder = 'Username'
            passwordInput.classList.remove('active')
            passwordInput.placeholder = 'Password'
        }, 2000)

        return
    }   else {

        const user = {
            name: usernameInput.value,
            password: passwordInput.value
        }

        if (users.length < 1) {
            users.push(user)

        }   else {
            let check = false

            users.forEach(u => {

                if (u.name === user.name) {
                    check = false
                }   else {
                    check = true
                }
            })

            console.log(users)

            if (check) {
                users.push(user)
            }

        }
    }
}

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