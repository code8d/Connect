export const leave = () => {
    const leaveButton = document.querySelector('.button__leave')

    if (leaveButton === null || leaveButton === undefined) {
        return
    }   else {
        leaveButton.addEventListener('click', leaveFrom)

        function leaveFrom() {
            window.location = 'http://127.0.0.1:5500/authorization.html'
        }

        return 0
    }
}

export default leave