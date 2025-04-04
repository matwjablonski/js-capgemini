## Zadanie nr 15

- zastąp w aplikacji wszystkie występienia konkatenacji (dodawanie stringów) template stringiem
- wykonaj destrukturyzację takich elementów jak:

```js
addNewBook(book) {
  this.books.push(book);
  const bookInstance = new Book(book);
  this.booksList.appendChild(bookInstance.container);
}
```
