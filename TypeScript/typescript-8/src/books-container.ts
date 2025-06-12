// Функция отображения книг, selectedGenre - выбранный жанр
function renderBooks(books: IBook[], genre: string) {
    highlightGenreButton(genre) // Подсвечиваем выбранный жанр книг
    const template = document.getElementById("book-template") as HTMLTemplateElement;
    const container = document.getElementById("books-container") as HTMLDivElement;
    if (!template || !container) return;

    // Очищаем контейнер перед рендером новых книг
    container.innerHTML = "";

    // Фильтруем книги по жанру и потом рендерим
    books.filter((book) => book.genre === genre)
    .forEach((book) => {
        const clone = template.content.cloneNode(true) as DocumentFragment;

        const bookTitle = clone.querySelector("h2") as HTMLHeadingElement;
        const bookAuthor = clone.querySelector("h3") as HTMLHeadingElement;
        const bookYear = clone.querySelector("h4") as HTMLHeadingElement;
        const deleteButton = clone.querySelector(".delete-book") as HTMLButtonElement;
        const editButton = clone.querySelector(".edit-book") as HTMLButtonElement;

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookYear.textContent = String(book.year);

        // Изменение книги
        editButton.addEventListener("click", () => {
            showFormEdit(book)
        })

        // Удаление книги
        deleteButton.addEventListener("click", () => {
            libraryInstant.deleteBook(book);
            renderBooks(libraryInstant.books, genre);
        })

        container.appendChild(clone);
    })
}

window.addEventListener("DOMContentLoaded", () => {
    renderBooks(libraryInstant.books, libraryInstant.genres[0])
})