import BookForm from "./BookForm.js";
import BooksList from './BooksList.js';
import { AppError } from './utils.js';

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
