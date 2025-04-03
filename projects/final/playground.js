// function checkIfFavorite(book) {
//   // if (book.isFavorite) {
//   //   return true;
//   // }

//   // return false;

//   return book.isFavorite;
// }

// for (let book of books) {
//   if (checkIfFavorite(book)) {
//     console.log('Ulubiona książka: ' + book.title);
//   }
// }

// function countTotalReadTimes(booksToCount) {
//   let total = 0;

//   for (let i = 0; i < booksToCount.length; i++) {
//     total += booksToCount[i].readTimes;
//   }

//   return total;
// }

// function countTotalReadTimes2(booksToCount) {
//   // return booksToCount.reduce((subValue, currItem) => {
//   //   return subValue + currItem.readTimes;
//   // }, 0);

//   return booksToCount.reduce((subValue, currItem) => subValue + currItem.readTimes, 0);
// }

// const total1 = countTotalReadTimes(books);
// const total2 = countTotalReadTimes2(books);

// // console.log(total1, total2);

// const findByTitle = function (title) {
//   return books.filter((book) => book.title.includes(title));
// }

// const foundBook = findByTitle("a");

// console.log('foundBook', foundBook)

// books.forEach((book) => {
//   if (book.isFavorite) {
//     console.log('Ulubiona książka: ' + book.title);
//   }
// });

// // console.log('Nasi czytelnicy czytali ' + total1 + ' razy.');

// function addNewBook(title, author, isFavorite, category) {
//   const book = {
//     title,
//     author,
//     isFavorite,
//     readTimes: 2,
//     category, 
//     id: books.length + 1,
//   };

//   books.push(book);

//   return book;
// }

// addNewBook(
//   "Nowa książka",
//   "Jan Kowalski",
//   true,
//   "Fantastyka"
// );

// addNewBook(
//   "JS dla testerów",
//   "Mateusz Jabłoński",
//   true,
//   "Sci-Fi"
// )

// // console.log(books);

// const total2 = countTotalReadTimes(books);

// // console.log('Nasi czytelnicy czytali ' + total2 + ' razy.');

// function switchIsFavorite(id) {
//   for (let book of books) {
//     if (book.id === id) {
//       book.isFavorite = !book.isFavorite;
//       break;
//     }
//   }
// }

// switchIsFavorite(8);




// function Course(name, duration) {
//   this.name = name;
//   this.duration = duration;
// }

// Course.prototype.getDuration = function () {
//   return this.duration;
// }

// new Course('JavaScript', 30);
// new Course('Python', 40);

// class Course {
//   constructor(name, duration) {
//     this.name = name;
//     this.duration = duration;
//   }

//   getDuration() {
//     return this.duration;
//   }
// }

// new Course('JavaScript', 30);
// new Course('Python', 40);

// class Test {
//   // public
//   getName() {
//     this.#getRealName();
//   }


//   // private
//   #getRealName() {

//   }
// }


// const test = "dasdas"; // setter

// test; // getter

class BooksListAbstract {
  constructor() {
    if (new.target === BooksListAbstract) {
      throw new Error("Nie można utworzyć instancji klasy BooksList");
    }
  }

  addBook() {
    throw new Error("aaa");
  }
}

class BooksList extends BooksListAbstract {
  constructor() {
    super();
  }

  addBook() {
    console.log("Dodaj książkę");
  }
}

const l = new BooksList();

l.addBook();
