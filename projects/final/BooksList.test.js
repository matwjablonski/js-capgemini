import BooksList from './BooksList';

describe('BooksList', () => {
  let container;
  let data;
  let booksList;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    data = [
      { title: 'Book 1', author: 'Author 1', category: 'Category 1', isFavorite: false },
      { title: 'Book 1', author: 'Author 1', category: 'Category 1', isFavorite: false },
    ];

    booksList = new BooksList(container, data);
  });

  test('should prepare lists of book', () => {
    const list = container.querySelector('.books-list');

    expect(list.children.length).toBe(data.length);
  });
});
