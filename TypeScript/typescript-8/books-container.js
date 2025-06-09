"use strict";
// Функция отображения книг, selectedGenre - выбранный жанр
function renderBooks(books, genre) {
    highlightGenreButton(genre); // Подсвечиваем выбранный жанр книг
    const template = document.getElementById("book-template");
    const container = document.getElementById("books-container");
    if (!template || !container)
        return;
    // Очищаем контейнер перед рендером новых книг
    container.innerHTML = "";
    // Фильтруем книги по жанру и потом рендерим
    books.filter((book) => book.genre === genre)
        .forEach((book) => {
        const clone = template.content.cloneNode(true);
        const bookTitle = clone.querySelector("h2");
        const bookAuthor = clone.querySelector("h3");
        const bookYear = clone.querySelector("h4");
        const deleteButton = clone.querySelector(".delete-book");
        const editButton = clone.querySelector(".edit-book");
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookYear.textContent = String(book.year);
        // Изменение книги
        editButton.addEventListener("click", () => {
            showFormEdit(book);
        });
        // Удаление книги
        deleteButton.addEventListener("click", () => {
            libraryInstant.deleteBook(book);
            renderBooks(libraryInstant.books, genre);
        });
        container.appendChild(clone);
    });
}
window.addEventListener("DOMContentLoaded", () => {
    renderBooks(libraryInstant.books, libraryInstant.genres[0]);
});
