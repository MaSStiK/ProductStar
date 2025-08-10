// Отображение результатов
function renderJikanData(data) {
    $("#jikan-search-count").text("Результатов найдено: " + data.length)
    $("#jikan-container").children().not("template").remove()

    // Сортировка по убыванию score
    data.sort((a, b) => b.score - a.score);

    data.forEach(item => {
        // Находим template с блоком с информацией о аниме
        const template = document.getElementById("jikan-template");

        const $clone = $(template.content.cloneNode(true));
        $clone.find(".anime-image").attr("src", item.image).attr("alt", item.title)
        $clone.find(".anime-title").text(item.title);
        $clone.find(".anime-episodes").text("Эпизодов:" + item.episodes);
        $clone.find(".anime-duration").text("Длительность: " + item.duration);
        $clone.find(".anime-favorites__count").text(item.favorites);
        $clone.find(".anime-score").text(item.score);
        
        $("#jikan-container").append($clone);
    });
}

// Получение данных
function getJikan(searchQuery) {
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/api/jikan/${searchQuery}`,
        dataType: "json",
        success: (data) => {
            renderJikanData(data)
        },
        error: (xhr, status, err) => {
            console.error("Ошибка AJAX:", status, err);
            console.log("Ответ сервера:", xhr.getAllResponseHeaders());
            $("#jikan-search-count").text("Результатов найдено: 0")
        }
    })
}

// Поле поиска
const jikanInput = $("#jikan-input")

// Кнопка поиска
$("#jikan-search").on("click tap", () => {
    $("#jikan-search-count").text("Загрузка данных...")
    const searchQuery = encodeURIComponent(jikanInput.val())
    getJikan(searchQuery)
})