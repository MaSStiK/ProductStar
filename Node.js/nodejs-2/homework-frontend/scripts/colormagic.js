// Отображение результатов
function renderColormagicData(data) {
    $("#colormagic-search-count").text("Результатов найдено: " + data.length)
    $("#colormagic-container").children().not("template").remove()

    data.forEach(item => {
        // Находим template с палитрой
        const template = document.getElementById("colormagic-pallet-template");

        const $clone = $(template.content.cloneNode(true));
        $clone.find(".pallet-name").text(item.text);
        $clone.find(".pallet-likes").text(item.likesCount);
        
        $clone.find(".colormagic-pallet__colors div").each((i, div) => {
            $(div).css("background-color", item.colors[i]);
        });

        $("#colormagic-container").append($clone);
    });
}

// Получение данных
function getColormagic(searchQuery) {
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/api/colormagic/${searchQuery}`,
        dataType: "json",
        success: (data) => {
            renderColormagicData(data)
        },
        error: (xhr, status, err) => {
            console.error("Ошибка AJAX:", status, err);
            console.log("Ответ сервера:", xhr.getAllResponseHeaders());
            $("#colormagic-search-count").text("Результатов найдено: 0")
        }
    })
}

// Поле поиска
const colormagicInput = $("#colormagic-input")

// Кнопка поиска
$("#colormagic-search").on("click tap", () => {
    $("#colormagic-search-count").text("Загрузка данных...")
    const searchQuery = encodeURIComponent(colormagicInput.val())
    getColormagic(searchQuery)
})