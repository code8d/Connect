const createUser = (username, password, users) => {

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

        if (users.length < 1) {
            users.push(user)

        }   else {
            let check = false

            users.forEach(u => {

                if (u.name === user.name) {
                    console.log('This username already exists.')
                    check = false
                }   else {
                    check = true
                }
            })

            if (check) {
                users.push(user)
            }

            console.log(users)
        }
    }
}

export default createUser