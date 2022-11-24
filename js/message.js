const message = () => {
    const textInput = document.querySelector('.write__input')
    const sendButton = document.querySelector('.send')
    const messagesBlock = document.querySelector('.messages-block')

    if (sendButton === null && textInput === null && messagesBlock === null) {
        return
    }   else sendButton.addEventListener('click', sendMessage)

    function sendMessage() {
        if (createMessage() === undefined) {
            return
        }   else {
            messagesBlock.append(createMessage())
            textInput.value = ''
            // let text = createMessage().children[0].children[1]
            // localStorage.setItem('message', JSON.stringify(text))
        }
    }

    function createMessage() {
        const message = document.createElement('div')
        message.classList.add('message')

        const messageBlock = document.createElement('div')
        messageBlock.classList.add('message-block')
    
        const messageUser = document.createElement('div')
        messageUser.classList.add('message__user')

        const imageBlock = document.createElement('div')
        imageBlock.classList.add('image-block')

        const img = document.createElement('img')
        img.classList.add('photo')
        img.src = './img/photo.jpg'

        const messageText = document.createElement('div')
        messageText.classList.add('message__text')
        messageText.textContent = textInput.value

        message.append(messageBlock)
        messageBlock.append(messageUser)
        messageUser.append(imageBlock)
        imageBlock.append(img)
        messageBlock.append(messageText)

        if (messageText.textContent === '') {
            return
        }   else return message
    }
}

export default message