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

function countTotalReadTimes(booksToCount) {
  let total = 0;

  for (let i = 0; i < booksToCount.length; i++) {
    total += booksToCount[i].readTimes;
  }

  return total;
}

const total1 = countTotalReadTimes(books);

console.log('Nasi czytelnicy czytali ' + total1 + ' razy.');

function addNewBook(title, author, isFavorite, category) {
  const book = {
    title,
    author,
    isFavorite,
    readTimes: 2,
    category, 
    id: books.length + 1,
  };

  books.push(book);

  return book;
}

addNewBook(
  "Nowa książka",
  "Jan Kowalski",
  true,
  "Fantastyka"
);

addNewBook(
  "JS dla testerów",
  "Mateusz Jabłoński",
  true,
  "Sci-Fi"
)

// console.log(books);

const total2 = countTotalReadTimes(books);

console.log('Nasi czytelnicy czytali ' + total2 + ' razy.');

function switchIsFavorite(id) {
  for (let book of books) {
    if (book.id === id) {
      book.isFavorite = !book.isFavorite;
      break;
    }
  }
}

switchIsFavorite(8);
