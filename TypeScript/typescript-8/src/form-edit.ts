const formEdit = document.getElementById("form-edit-book") as HTMLFormElement;
formEdit.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = (document.getElementById("form-edit-title") as HTMLInputElement).value;
    const author = (document.getElementById("form-edit-author") as HTMLInputElement).value;
    const year = parseInt((document.getElementById("form-edit-year") as HTMLInputElement).value);
    const genre = (document.getElementById("form-edit-genre") as HTMLInputElement).value;

    const editedBook = new Book(title, author, year, genre);
    libraryInstant.editBook(editedBook)
    renderBooks(libraryInstant.books, genre);

    formEdit.reset();
    showFormAdd()
});

// Отобразить форму изменения книги
function showFormEdit(book: IBook) {
    formEdit.reset();
    formEdit.style.display = "flex";
    formAdd.style.display = "none";

    (document.getElementById("form-edit-title") as HTMLInputElement).value = book.title;
    (document.getElementById("form-edit-author") as HTMLInputElement).value = book.author;
    (document.getElementById("form-edit-year") as HTMLInputElement).value = String(book.year);
    (document.getElementById("form-edit-genre") as HTMLSelectElement).value = book.genre;
}

// Кнопка отмены изменения
const formEditCancel = document.getElementById("form-edit-cancel") as HTMLButtonElement
formEditCancel.addEventListener("click", () => {
    showFormAdd()
})