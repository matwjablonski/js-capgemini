// function checkIfFavorite(book) {
//   // if (book.isFavorite) {
//   //   return true;
//   // }

import { name } from 'browser-sync';

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

// class BooksListAbstract {
//   constructor() {
//     if (new.target === BooksListAbstract) {
//       throw new Error("Nie można utworzyć instancji klasy BooksList");
//     }
//   }

//   addBook() {
//     throw new Error("aaa");
//   }
// }

// class BooksList extends BooksListAbstract {
//   constructor() {
//     super();
//   }

//   addBook() {
//     console.log("Dodaj książkę");
//   }
// }

// let counter = 0;

// app.addEventListener("click", (event) => {
//   counter++;
//   console.log("Licznik kliknięć:", counter);
// }, { once: true });

// class AppError extends Error {
//   constructor(message, moduleName = 'App') {
//     super(message);
//     this.name = '[Moduł ' + moduleName + ']';
//   }
// }

// // throw new Error('Nie można utworzyć instancji klasy AppError');
// throw new AppError('Nie można utworzyć instancji klasy AppError');

// const array = [1, 2, 3, 4, 6, 7];

// // const el1 = array[0];
// // const el4 = array[3];

// const [a, , , d] = array;


// const [first, ...rest] = array;

// rest // [2, 3, 4, 6, 7]

// const person = {
//   name: 'Jan',
//   age: 30,
//   skills: {
//     programming: ['JavaScript', 'Python'],
//     languages: ['Polski', 'Angielski'],
//     other: ['Git', 'Docker'],
//   },
// };

// const {
//   name: nameValue,
//   age,
//   getName,
//   skills: {
//     programming,
//     languages,
//     other,
//   }
// } = person;

// person.name; // Jan
// nameValue // Jan
// person.skills.programming; // ['JavaScript', 'Python']
// programming // ['JavaScript', 'Python']

// import styled from 'styled-components';

// const Div = styled.div`
//   background-color: red;
//   color: white;
//   font-size: 20px;
//   padding: 20px;
// `;

// const a = {
//   name: 'Adam',
// }
// const b = a;
// b.name = 'Jan';
// console.log(a.name); // Jan

// const c = "Adam"
// const d = c;
// d = "Jan";
// console.log(c); // Adam


// function f(a) {
//  return a + (arguments.length - 1)
// }

// f(2, '32da', false) // 2 + 2 = 4

// function g(x, y, z) {
//   return x + y + z;
// }

// const arr = [1, 2, 3];
// g(...arr); // 6

// g(arr[0], arr[1], arr[2]); // 6


const newSymbol1 = Symbol('test');
const newSymbol2 = Symbol('test');

console.log(newSymbol1 === newSymbol2); // false
