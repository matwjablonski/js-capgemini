import Book from './Book.js';

export class BooksListAbstract {
  constructor(container, data) {
    if (new.target === BooksListAbstract) {
      throw new Error("Nie można utworzyć instancji klasy BooksList");
    }
  }

  prepareBooksList() {
    throw new Error("Should be implemented in child class");
  }

  addBook() {
    throw new Error("Should be implemented in child class");
  }
}

class BooksList extends BooksListAbstract {
  container;
  booksList;
  books;

  constructor(container, data) {
    super(container, data);

    this.container = container;
    this.books = data;

    this.prepareBooksList();
  }

  prepareBooksList() {
    const list = document.createElement("ul");
    list.classList.add("books-list");

    this.books.forEach((book) => {
      const { container } = new Book(book);
      list.appendChild(container);
    });

    this.booksList = list;
    this.container.appendChild(list);
  }

  addNewBook(book) {
    this.books.push(book);
    const bookInstance = new Book(book);
    this.booksList.appendChild(bookInstance.container);
  }
}

export default BooksList;
