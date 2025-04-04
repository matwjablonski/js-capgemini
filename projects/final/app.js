import BookForm from "./BookForm.js";
import { AppError } from './utils.js';

class BooksListAbstract {
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

class BookAbstract {
  data;

  constructor(data) {
    this.data = data;

    if (new.target === BookAbstract) {
      throw new Error("Nie można utworzyć instancji klasy Book");
    }

    this.prepareBookItem();
  }

  prepareBookItem() {
    throw new Error("Should be implemented in child class");
  }

  handleFavorite() {
    throw new Error("Should be implemented in child class");
  }
}

class Book extends BookAbstract {
  container;
  data;

  constructor(data) {
    super(data);

    this.data = data;
    this.prepareBookItem();
  }

  prepareBookItem() {
    const bookItem = document.createElement("li");
    bookItem.classList.add("book-item");

    if (this.data.isFavorite) {
      bookItem.classList.add("favorite");
    }

    this.container = bookItem;

    this.renderTitle();
    this.renderAuthor();
    this.renderCategory();

    this.renderActionButton();
  }

  renderTitle() {
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = this.data.title;

    this.container.appendChild(bookTitle);
  }

  renderAuthor() {
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = this.data.author;

    this.container.appendChild(bookAuthor);
  }
  
  renderCategory() {
    const bookCategory = document.createElement("p");
    bookCategory.textContent = 'Kategoria: ' + this.data.category;
    bookCategory.classList.add("book-category");
  
    this.container.appendChild(bookCategory);
  }

  renderActionButton() {
    const action = document.createElement("button");
    action.textContent = this.prepareTextForActionButton();
  
    action.classList.add("action-button");
    this.container.appendChild(action);

    action.addEventListener('click', this.handleFavorite.bind(this));
  }

  prepareTextForActionButton() {
    return this.data.isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych";
  }

  handleFavorite(event) {
    this.data.isFavorite = !this.data.isFavorite;
    event.target.textContent = this.prepareTextForActionButton();
    this.container.classList.toggle("favorite");
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
      const bookInstance = new Book(book);
      list.appendChild(bookInstance.container);
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

class App {
  constructor(container) {
    this.container = container;

    this.fetchBooks();
    this.initGlobalEvents();
  }

  async fetchBooks() {
    try {
      const response = await fetch('./data.json');
      if (!response.ok) {
        throw new AppError('Network response was not ok');
      }
      const data = await response.json();

      this.books = data;
      this.prepareBooks();
    } catch (error) {
      if (error instanceof AppError) {
        console.error(error.message);
      }

      console.error('Error fetching books:', error);
    }
  }

  prepareBooks() {
    this.bookListInstance = new BooksList(this.container, this.books);
    new BookForm(this.container, this.bookListInstance.addNewBook.bind(this.bookListInstance));
  }

  initGlobalEvents() {
    this.checkRwdMode();
  }

  checkRwdMode() {
    this.prepareRwdWarning();
    this.displayWarningForRwdMode();

    window.addEventListener("resize", () => {
      this.displayWarningForRwdMode();
    });
  }

  displayWarningForRwdMode() {
    if (window.innerWidth < 800) {
      this.message.style.display = "block";
    } else {
      this.message.style.display = "none";
    }
  }

  prepareRwdWarning() {
    const message = document.createElement("p");
    message.textContent = "Nasza aplikacja nie obsługuje RWD!";
    message.style.color = "red";
    message.style.border = "1px solid red";
    message.style.padding = "10px"
    document.body.insertAdjacentElement("beforebegin", message);

    this.message = message;
  }
}

const app = document.getElementById("app");
new App(app);
