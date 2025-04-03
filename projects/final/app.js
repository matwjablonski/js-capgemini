const generateRandomId = function (length = 16) {
  const id = Array.from(
    { length }, 
    () => Math.floor(Math.random() * 10)
  ).join("");

  return id;
}

const rawBooks = [
  {
    title: "W pustyni i w puszczy",
    author: "Henryk Sienkiewicz",
    isFavorite: false,
    readTimes: 0,
    category: "Przygodowa",
  },
  {
    title: "Pan Tadeusz",
    author: "Adam Mickiewicz",
    isFavorite: true,
    readTimes: null,
    category: "Epopeja",
  },
  {
    title: "Król Edyp",
    author: "Sofokles",
    isFavorite: false,
    readTimes: 1,
    category: "Tragedia",
  },
  {
    title: "Zbrodnia i kara",
    author: "Fiodor Dostojewski",
    isFavorite: true,
    readTimes: 5,
    category: "Powieść psychologiczna",
  },
  {
    title: "Mistrz i Małgorzata",
    author: "Michaił Bułhakow",
    isFavorite: false,
    readTimes: 2,
    category: "Fantastyka",
  },
  {
    title: "Wielki Gatsby",
    author: "F. Scott Fitzgerald",
    isFavorite: true,
    readTimes: 4,
    category: "Powieść amerykańska",
  }
];

const books = rawBooks.map((book) => ({
  ...book,
  id: generateRandomId(),
  owner: "Mateusz Jabłoński",
}));

// const prepareForm = (app) => {
//   const form = document.createElement("form");
//   form.classList.add("book-form");

//   const titleInput = document.createElement("input");
//   titleInput.type = "text";
//   titleInput.name = 'title';
//   titleInput.placeholder = "Tytuł książki";
//   form.appendChild(titleInput);

//   const authorInput = document.createElement("input");
//   authorInput.type = "text";
//   authorInput.placeholder = "Autor książki";
//   authorInput.name = 'author';
//   form.appendChild(authorInput);

//   const categoryInput = document.createElement("input");
//   categoryInput.type = "text";
//   categoryInput.name = 'category';
//   categoryInput.placeholder = "Kategoria książki";
//   form.appendChild(categoryInput);

//   const submitButton = document.createElement("button");
//   submitButton.type = "submit";
//   submitButton.textContent = "Dodaj książkę";
//   form.appendChild(submitButton);

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);

//     const book = addNewBook(
//       data.get("title"),
//       data.get("author"),
//       false,
//       data.get("category")
//     );
    
//     const bookItem = prepareBookItem(book);
//     list.appendChild(bookItem);
//   });

//   app.appendChild(form);
// }

// prepareForm(app);

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
}

class App {
  constructor(container) {
    new BooksList(container, books);

    this.initGlobalEvents();
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

// function addNewBook(title, author, isFavorite, category) {
//   const book = {
//     title,
//     author,
//     isFavorite,
//     readTimes: 0,
//     category, 
//     id: generateRandomId(),
//     owner: "Mateusz Jabłoński",
//   };

//   books.push(book);

//   return book;
// }
