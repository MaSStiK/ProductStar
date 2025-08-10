let messagesList = []

// Получение списка сообщений
export function getMessages() {
    return messagesList
}

// Сохранение сообщения
export function saveMessage(text) {
    messagesList.push({
        text,
        date: Date.now()
    })
    return messagesList
}

// Изменение сообщения
export function editMessage(text, date) {
    const message = messagesList.find(item => String(item.date) === date)
    if (message) {
        message.text = text
    }
    return messagesList
}

// Удаление сообщения
export function deleteMessage(date) {
    messagesList = messagesList.filter(item => String(item.date) !== date)
    return messagesList
}