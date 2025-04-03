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

const prepareBookItem = (book) => {
  const bookItem = document.createElement("li");
  bookItem.classList.add("book-item");

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = book.title;
  bookItem.appendChild(bookTitle);
  
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;
  bookItem.appendChild(bookAuthor);

  const bookCategory = document.createElement("p");
  bookCategory.textContent = 'Kategoria: ' + book.category;
  bookCategory.classList.add("book-category");
  bookItem.appendChild(bookCategory);

  const action = document.createElement("button");
  
  action.textContent = book.isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych";
  if (book.isFavorite) {
    bookItem.classList.add("favorite");
  }

  action.classList.add("action-button");
  bookItem.appendChild(action);

  action.addEventListener("click", (event) => {
    book.isFavorite = !book.isFavorite;
    bookItem.classList.toggle("favorite");
    action.textContent = book.isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych";

    
  });

  return bookItem;
}

const prepareBooksList = (app) => {
  const list = document.createElement("ul");
  list.classList.add("books-list");

  books.forEach((book) => {
    const bookItem = prepareBookItem(book);
    list.appendChild(bookItem);
  });

  app.appendChild(list);

  return list;
}

const app = document.getElementById("app");
const list = prepareBooksList(app);

function addNewBook(title, author, isFavorite, category) {
  const book = {
    title,
    author,
    isFavorite,
    readTimes: 0,
    category, 
    id: generateRandomId(),
    owner: "Mateusz Jabłoński",
  };

  books.push(book);

  return book;
}

const prepareForm = (app) => {
  const form = document.createElement("form");
  form.classList.add("book-form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = 'title';
  titleInput.placeholder = "Tytuł książki";
  form.appendChild(titleInput);

  const authorInput = document.createElement("input");
  authorInput.type = "text";
  authorInput.placeholder = "Autor książki";
  authorInput.name = 'author';
  form.appendChild(authorInput);

  const categoryInput = document.createElement("input");
  categoryInput.type = "text";
  categoryInput.name = 'category';
  categoryInput.placeholder = "Kategoria książki";
  form.appendChild(categoryInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Dodaj książkę";
  form.appendChild(submitButton);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const book = addNewBook(
      data.get("title"),
      data.get("author"),
      false,
      data.get("category")
    );
    
    const bookItem = prepareBookItem(book);
    list.appendChild(bookItem);
  });

  

  app.appendChild(form);
}

prepareForm(app);

let counter = 0;

app.addEventListener("click", (event) => {
  counter++;
  console.log("Licznik kliknięć:", counter);
}, { once: true });

const message = document.createElement("p");
message.textContent = "Nasza aplikacja nie obsługuje RWD!";
message.style.color = "red";
message.style.border = "1px solid red";
message.style.padding = "10px"
document.body.insertAdjacentElement("beforebegin", message);

if (window.innerWidth < 800) {
  message.style.display = "block";
} else {
  message.style.display = "none";
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 800) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
})

class BooksList {
  constructor() {
    if (new.target === BooksList) {
      throw new Error("Nie można utworzyć instancji klasy BooksList");
    }
  }
}

new BooksList();
