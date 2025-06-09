interface ILibrary {
    readonly books: IBook[];
    readonly genres: string[];
    addBook(book: IBook): boolean;
    editBook(book: IBook): void;
    deleteBook(book: IBook): void;
}

class Library implements ILibrary {
    private libraryBooks: IBook[] = [];

    // Список разрешенных жанров
    private allowedGenres: string[] = [
        "Роман",
        "Повесть",
        "Фантастика",
        "Детектив",
        "Триллер",
        "Юмор",
        "Ужасы",
    ];

    addBook(book: IBook) {
        if (this.libraryBooks.some(item => item.title === book.title)) {
            console.log("Эта книга уже есть в библиотеке");
            return false;
        }
        this.libraryBooks.push(book);
        return true;
        // console.log("Добавлена книга", book);
    }

    editBook(book: IBook) {
        console.log(book);
        
        const index = this.libraryBooks.findIndex(item => item.title === book.title);
        if (index === -1) {
            console.log("Книга не найдена");
            return;
        }

        this.libraryBooks[index] = book;
        console.log("Книга обновлена");
    }

    deleteBook(book: IBook) {
        this.libraryBooks = this.libraryBooks.filter(item => item.title !== book.title);
        console.log("Книга удалена");
    }

    get books() {
        return this.libraryBooks;
    }

    get genres() {
        return this.allowedGenres;
    }
}

// Создаем глобальный инстанс библиотеки 
const libraryInstant = new Library()

// Загрузка изначальных книг в библиотеку
// Роман
libraryInstant.addBook(new Book("Мастер и Маргарита", "Михаил Булгаков", 1967, "Роман"));
libraryInstant.addBook(new Book("Братья Карамазовы", "Фёдор Достоевский", 1880, "Роман"));
libraryInstant.addBook(new Book("Анна Каренина", "Лев Толстой", 1877, "Роман"));
libraryInstant.addBook(new Book("Сто лет одиночества", "Габриэль Гарсиа Маркес", 1967, "Роман"));
libraryInstant.addBook(new Book("Война и мир", "Лев Толстой", 1869, "Роман "));
libraryInstant.addBook(new Book("Преступление и наказание", "Фёдор Достоевский", 1866, "Роман "));

// Повесть
libraryInstant.addBook(new Book("Старик и море", "Эрнест Хемингуэй", 1952, "Повесть"));
libraryInstant.addBook(new Book("Белый Бим Черное ухо", "Гавриил Троепольский", 1971, "Повесть"));
libraryInstant.addBook(new Book("Собачье сердце", "Михаил Булгаков", 1925, "Повесть"));
libraryInstant.addBook(new Book("Записки из подполья", "Фёдор Достоевский", 1864, "Повесть"));

// Фантастика
libraryInstant.addBook(new Book("Первому игроку приготовиться", "Эрнест Клайн", 2011, "Фантастика"));
libraryInstant.addBook(new Book("Чоки-Чок", "Владислав Крапивин", 1992, "Фантастика"));
libraryInstant.addBook(new Book("Марсианин", "Энди Вейер", 2011, "Фантастика"));
libraryInstant.addBook(new Book("Я, робот", "Айзек Азимов", 1950, "Фантастика"));

// Детектив
libraryInstant.addBook(new Book("Шерлок Холмс: Собака Баскервилей", "Артур Конан Дойл", 1902, "Детектив"));
libraryInstant.addBook(new Book("Убийство в Восточном экспрессе", "Агата Кристи", 1934, "Детектив"));