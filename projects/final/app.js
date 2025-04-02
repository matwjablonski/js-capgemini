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

  return bookItem;
}

const prepareBooksList = (app) => {
  const list = document.createElement("ul");

  books.forEach((book) => {
    const bookItem = prepareBookItem(book);
    list.appendChild(bookItem);
  });

  app.appendChild(list);
}

const app = document.getElementById("app");
prepareBooksList(app);
