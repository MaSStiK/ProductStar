// Активируем контейнер с чипсами, передаем в функцию текст из кнопки
function bindChips(chipsContainer, func) {
    $(chipsContainer).find("button").on("click tap", function () {
        func($(this).text())
    })
}

bindChips("#colormagic-chips", getColormagic)
bindChips("#jikan-chips", getJikan)