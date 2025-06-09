interface IBook {
    readonly title: string;
    readonly author: string;
    readonly year: number;
    readonly genre: string;
}

class Book implements IBook {
    private bookTitle: string;
    private bookAuthor: string;
    private bookYear: number;
    private bookGenre: string;

    constructor(bookTitle: string, bookAuthor: string, bookYear: number, bookGenre: string) {
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