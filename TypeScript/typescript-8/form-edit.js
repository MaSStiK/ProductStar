"use strict";
// Форма изменения книги
const formEdit = document.getElementById("form-edit-book");
formEdit.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("form-edit-title").value;
    const author = document.getElementById("form-edit-author").value;
    const year = parseInt(document.getElementById("form-edit-year").value);
    const genre = document.getElementById("form-edit-genre").value;
    const editedBook = new Book(title, author, year, genre);
    libraryInstant.editBook(editedBook);
    renderBooks(libraryInstant.books, genre);
    formEdit.reset();
    showFormAdd();
});
// Отобразить форму изменения книги
function showFormEdit(book) {
    formEdit.reset(); // Сброс формы
    formEdit.style.display = "flex";
    formAdd.style.display = "none";
    document.getElementById("form-edit-title").value = book.title;
    document.getElementById("form-edit-author").value = book.author;
    document.getElementById("form-edit-year").value = String(book.year);
    document.getElementById("form-edit-genre").value = book.genre;
}
// Кнопка отмены изменения
const formEditCancel = document.getElementById("form-edit-cancel");
formEditCancel.addEventListener("click", () => {
    showFormAdd();
});
