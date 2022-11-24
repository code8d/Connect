const createUser = (username, password) => {

    if (username.value.length === 0 && password.value.length === 0) {
        username.classList.add('active')
        username.placeholder = 'Enter username'
        password.classList.add('active')
        password.placeholder = 'Enter password'
        
        setTimeout(() => {
            username.classList.remove('active')
            username.placeholder = 'Username'
            password.classList.remove('active')
            password.placeholder = 'Password'
        }, 2000)

        return
    }   else {

        const user = {
            name: username.value,
            password: password.value
        }

        if (localStorage.length < 1) {
            localStorage.setItem(`user${randomNumber()}`, JSON.stringify(user))
        }   else {
            let check = false

            for (let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {

                    let u = localStorage.getItem(key)
                    if (u.name === user.name) {
                        console.log('This username already exists.')
                        check = false
                    }   else check = true
                }
            }

            if (check) {
                localStorage.setItem(`user${randomNumber()}`, JSON.stringify(user))
            }
        }
    }

    function randomNumber() {
        return Math.random()
    }
}

export default createUser