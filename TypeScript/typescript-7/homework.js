"use strict";
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class LibraryBook extends Book {
    constructor(title, author, year) {
        super(title, author, year);
    }
    checkout() {
        console.log(`Книга "${this.title}" была выдана на руки`);
    }
    getTitle() {
        return this.title;
    }
}
class DigitalBook extends Book {
    constructor(title, author, year) {
        super(title, author, year);
    }
    checkout() {
        console.log(`Книга "${this.title}" была загружена на устройство`);
    }
    getTitle() {
        return this.title;
    }
}
const libraryBook = new LibraryBook("Преступление и наказание", "Фёдор Михайлович Достоевский", 1866);
libraryBook.checkout();
console.log(libraryBook.getTitle());
const digitalBook = new DigitalBook("Приключения капитана Врунгеля", "Андрей Сергеевич Некрасов", 1937);
digitalBook.checkout();
console.log(digitalBook.getTitle());
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    checkoutBook(title) {
        const book = this.books.find(item => item.getTitle() === title);
        if (!book) {
            console.log("Книга не найдена");
            return;
        }
        // Если книга найдена - делаем checkout
        book.checkout();
    }
}
const libraryInstant = new Library();
libraryInstant.addBook(libraryBook);
libraryInstant.addBook(digitalBook);
libraryInstant.checkoutBook("Преступление и наказание");
libraryInstant.checkoutBook("Приключения капитана Врунгеля");
libraryInstant.checkoutBook("Война и мир");
