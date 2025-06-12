// Форма добавление книги
const formAdd = document.getElementById("form-add-book") as HTMLFormElement;
formAdd.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = (document.getElementById("form-add-title") as HTMLInputElement).value;
    const author = (document.getElementById("form-add-author") as HTMLInputElement).value;
    const year = parseInt((document.getElementById("form-add-year") as HTMLInputElement).value);
    const genre = (document.getElementById("form-add-genre") as HTMLInputElement).value;

    const newBook = new Book(title, author, year, genre);
    const success = libraryInstant.addBook(newBook);
    
    // Если такая книга уже есть - выводим ошибку
    if (!success) {
        alert("Книга с таким названием уже есть!");
        return;
    }

    renderBooks(libraryInstant.books, genre);
    formAdd.reset();
})

// Отобразить форму добавления книги
function showFormAdd() {
    formAdd.reset(); // Сброс формы
    formAdd.style.display = "flex";
    formEdit.style.display = "none";
}