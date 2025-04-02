console.log("Witaj w naszej aplikacji książkowej!");

const books = [
  {
    id: 1,
    title: "W pustyni i w puszczy",
    author: "Henryk Sienkiewicz",
    isFavorite: false,
    readTimes: 0,
    category: "Przygodowa",
  },
  {
    id: 2,
    title: "Pan Tadeusz",
    author: "Adam Mickiewicz",
    isFavorite: true,
    readTimes: null,
    category: "Epopeja",
  },
  {
    id: 3,
    title: "Król Edyp",
    author: "Sofokles",
    isFavorite: false,
    readTimes: 1,
    category: "Tragedia",
  },
  {
    id: 4,
    title: "Zbrodnia i kara",
    author: "Fiodor Dostojewski",
    isFavorite: true,
    readTimes: 5,
    category: "Powieść psychologiczna",
  },
  {
    id: 5,
    title: "Mistrz i Małgorzata",
    author: "Michaił Bułhakow",
    isFavorite: false,
    readTimes: 2,
    category: "Fantastyka",
  },
  {
    id: 6,
    title: "Wielki Gatsby",
    author: "F. Scott Fitzgerald",
    isFavorite: true,
    readTimes: 4,
    category: "Powieść amerykańska",
  }
];

function checkIfFavorite(book) {
  // if (book.isFavorite) {
  //   return true;
  // }

  // return false;

  return book.isFavorite;
}

for (let book of books) {
  if (checkIfFavorite(book)) {
    console.log('Ulubiona książka: ' + book.title);
  }
}

let totalReadTimes = 0;

for (let i = 0; i < books.length; i++) {
  totalReadTimes += books[i].readTimes;
}

console.log('Nasi czytelnicy czytali ' + totalReadTimes + ' razy.');

function addNewBook(title, author, isFavorite, category) {
  const book = {
    title,
    author,
    isFavorite,
    readTimes: 0,
    category, 
    id: books.length + 1,
  };

  books.push(book);
}

addNewBook(
  "Nowa książka",
  "Jan Kowalski",
  true,
  "Fantastyka"
);

console.log(books);
