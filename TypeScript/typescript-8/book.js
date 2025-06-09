"use strict";
class Book {
    constructor(bookTitle, bookAuthor, bookYear, bookGenre) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookYear = bookYear;
        this.bookGenre = bookGenre;
    }
    get title() {
        return this.bookTitle;
    }
    get author() {
        return this.bookAuthor;
    }
    get year() {
        return this.bookYear;
    }
    get genre() {
        return this.bookGenre;
    }
}
