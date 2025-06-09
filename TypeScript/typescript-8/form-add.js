"use strict";
// Добавление книги
const formAdd = document.getElementById("form-add-book");
formAdd.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("form-add-title").value;
    const author = document.getElementById("form-add-author").value;
    const year = parseInt(document.getElementById("form-add-year").value);
    const genre = document.getElementById("form-add-genre").value;
    const newBook = new Book(title, author, year, genre);
    const success = libraryInstant.addBook(newBook);
    // Если такая книга уже есть - выводим ошибку
    if (!success) {
        alert("Книга с таким названием уже есть!");
        return;
    }
    renderBooks(libraryInstant.books, genre);
    formAdd.reset();
});
// Отобразить форму добавления книги
function showFormAdd() {
    formAdd.reset(); // Сброс формы добавления
    formAdd.style.display = "flex";
    formEdit.style.display = "none";
}
