// Отображение результатов
function renderMessages(data) {
    $("#message-search-count").text("Сообщений загружено: " + data.length)
    $("#messages-container").children().not("template").remove()

    data.forEach(item => {
        // Находим template с сообщением
        const template = document.getElementById("message-template");

        const $clone = $(template.content.cloneNode(true));
        $clone.find(".message-text").text(item.text);
        $clone.find(".message-edit").attr("data-date", item.date);
        $clone.find(".message-delete").attr("data-date", item.date);

        $("#messages-container").append($clone);
    });
}

// Получить все сообщения
function getMessages() {
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/api/messages`,
        dataType: "json",
        success: (data) => {
            renderMessages(data)
        },
        error: (xhr, status, err) => {
            console.error("Ошибка AJAX:", status, err);
            console.log("Ответ сервера:", xhr.getAllResponseHeaders());
            $("#message-search-count").text("Сообщений загружено: 0")
        }
    })
}

// Добавить сообщение
function addMessages(text) {
    $.ajax({
        method: "POST",
        url: `http://localhost:3000/api/messages`,
        data: JSON.stringify({text}),
        contentType: "application/json",
        dataType: "json",
        success: (data) => {
            renderMessages(data)
        },
        error: (xhr, status, err) => {
            console.error("Ошибка AJAX:", status, err);
            console.log("Ответ сервера:", xhr.getAllResponseHeaders());
            $("#message-search-count").text("Сообщений загружено: 0")
        }
    })
}

// Изменить сообщение
function editMessages(text, date) {
    $.ajax({
        method: "PUT",
        url: `http://localhost:3000/api/messages`,
        data: JSON.stringify({text , date}),
        contentType: "application/json",
        dataType: "json",
        success: (data) => {
            renderMessages(data)
        },
        error: (xhr, status, err) => {
            console.error("Ошибка AJAX:", status, err);
            console.log("Ответ сервера:", xhr.getAllResponseHeaders());
            $("#message-search-count").text("Сообщений загружено: 0")
        }
    })
}

// Удалить сообщение
function deleteMessages(date) {
    $.ajax({
        method: "DELETE",
        url: `http://localhost:3000/api/messages`,
        data: JSON.stringify({date}),
        contentType: "application/json",
        dataType: "json",
        success: (data) => {
            renderMessages(data)
        },
        error: (xhr, status, err) => {
            console.error("Ошибка AJAX:", status, err);
            console.log("Ответ сервера:", xhr.getAllResponseHeaders());
            $("#message-search-count").text("Сообщений загружено: 0")
        }
    })
}

// Поле с текстом сообщения
const messagesInput = $("#message-input")

// Кнопка Добавления
$("#message-add").on("click tap", () => {
    $("#message-search-count").text("Загрузка сообщений...")
    addMessages(messagesInput.val())
})

// Кнопка Обновления
$("#message-reload").on("click tap", () => {
    $("#message-search-count").text("Загрузка сообщений...")
    getMessages()
})

// Кнопка изменения сообщения
$("#messages-container").on("click tap", ".message-edit", function () {
    const text = $(this).closest(".message").find(".message-text").text()
    const newText = prompt("Введите текст нового сообщения", text)

    // Если текст пустой или не изменился - ничего не меняем
    if (!newText || newText === text) return

    const date = $(this).attr("data-date")
    editMessages(newText, date)
})

// Кнопка удаления сообщения
$("#messages-container").on("click tap", ".message-delete", function () {
    const date = $(this).attr("data-date")
    deleteMessages(date)
})

// Сразу запускаем поиск сообщений
getMessages()