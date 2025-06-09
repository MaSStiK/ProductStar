function renderGenres(genres: string[]) {
    const template = document.getElementById("genre-template") as HTMLTemplateElement;
    const container = document.getElementById("genres-container") as HTMLDivElement;
    if (!template || !container) return;

    genres.forEach((genre) => {
        const clone = template.content.cloneNode(true) as DocumentFragment;
        const genreButton = clone.querySelector("button") as HTMLButtonElement;
        genreButton.textContent = genre;

        container.appendChild(clone);

        genreButton.addEventListener("click", () => {
            renderBooks(libraryInstant.books, genre); // вызываем с нужным жанром
        });
    });
}

// Подсветить кнопку с жанром
function highlightGenreButton(genre: string) {
    const buttons = document.querySelectorAll("#genres-container .genre-block button");

    buttons.forEach(button => {
        button.classList.remove("active");
        if (button.textContent?.trim() === genre) {
            button.classList.add("active");
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    renderGenres(libraryInstant.genres)

    // Добавляем все жанры в Select в обоих формах
    const formAddSelect = document.getElementById("form-add-genre") as HTMLSelectElement;
    const formEditSelect = document.getElementById("form-edit-genre") as HTMLSelectElement;

    libraryInstant.genres.forEach((genre) => {
        const option1 = document.createElement("option");
        option1.value = genre;
        option1.textContent = genre;
        formAddSelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = genre;
        option2.textContent = genre;
        formEditSelect.appendChild(option2);
        
        formAddSelect.appendChild(option1);
        formEditSelect.appendChild(option2);
    });
});