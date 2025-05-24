interface IBook {
    checkout(): void;
    getTitle(): string;
}

abstract class Book {
    constructor(
        protected title: string,
        protected author: string,
        protected year: number
    ) {}

    abstract checkout(): void;
    abstract getTitle(): string;
}

class LibraryBook extends Book implements IBook {
    constructor(title: string, author: string, year: number) {
        super(title, author, year)
    }

    checkout() {
        console.log(`Книга "${this.title}" была выдана на руки`);
    }

    getTitle() {
        return this.title
    }
}

class DigitalBook extends Book implements IBook {
    constructor(title: string, author: string, year: number) {
        super(title, author, year)
    }

    checkout() {
        console.log(`Книга "${this.title}" была загружена на устройство`);
    }

    getTitle() {
        return this.title
    }
}

const libraryBook = new LibraryBook("Преступление и наказание", "Фёдор Михайлович Достоевский", 1866)
libraryBook.checkout()
console.log(libraryBook.getTitle());

const digitalBook = new DigitalBook("Приключения капитана Врунгеля", "Андрей Сергеевич Некрасов", 1937)
digitalBook.checkout()
console.log(digitalBook.getTitle());

interface ILibrary {
    addBook(book: IBook): void;
    checkoutBook(title: string): void;
}

class Library implements ILibrary {
    private books: IBook[] = []; // Делаем переменную приватной

    addBook(book: IBook) {
        if (this.books.some(item => item.getTitle() === book.getTitle())) {
            console.log("Эта книга уже есть в библиотеке");
            return;
        }
        this.books.push(book);
    }

    checkoutBook(title: string) {
        const book = this.books.find(item => item.getTitle() === title)
        if (!book) {
            console.log("Книга не найдена");
            return
        }
        // Если книга найдена - делаем checkout
        book.checkout()
    }
}

const libraryInstant = new Library()
libraryInstant.addBook(libraryBook)
libraryInstant.addBook(digitalBook)
libraryInstant.addBook(digitalBook) // Вывод ошибки
libraryInstant.checkoutBook("Преступление и наказание")
libraryInstant.checkoutBook("Приключения капитана Врунгеля")
libraryInstant.checkoutBook("Война и мир") // Вывод ошибки