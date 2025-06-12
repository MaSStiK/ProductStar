"use strict";
function renderGenres(genres) {
    const template = document.getElementById("genre-template");
    const container = document.getElementById("genres-container");
    if (!template || !container)
        return;
    genres.forEach((genre) => {
        const clone = template.content.cloneNode(true);
        const genreButton = clone.querySelector("button");
        genreButton.textContent = genre;
        container.appendChild(clone);
        genreButton.addEventListener("click", () => {
            renderBooks(libraryInstant.books, genre); // вызываем с нужным жанром
        });
    });
}
// Подсветить кнопку с жанром
function highlightGenreButton(genre) {
    const buttons = document.querySelectorAll("#genres-container .genre-block button");
    buttons.forEach(button => {
        button.classList.remove("active");
        if (button.textContent?.trim() === genre) {
            button.classList.add("active");
        }
    });
}
window.addEventListener("DOMContentLoaded", () => {
    renderGenres(libraryInstant.genres);
    // Добавляем все жанры в Select в обоих формах
    const formAddSelect = document.getElementById("form-add-genre");
    const formEditSelect = document.getElementById("form-edit-genre");
    libraryInstant.genres.forEach((genre) => {
        const createOption = (value, parent) => {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = value;
            parent.appendChild(option);
        };
        createOption(genre, formAddSelect);
        createOption(genre, formEditSelect);
    });
});
