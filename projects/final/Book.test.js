import Book from './Book';

describe('Book', () => {
  let container;
  let book;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    const data = { title: 'test', author: 'test', category: 'test', isFavorite: false };
    book = new Book(data);
    container.appendChild(book.container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('should create a book item', () => {
    expect(book.container.classList.contains('book-item')).toBe(true);
  });

  test('should render book title', () => {
    const title = book.container.querySelector('[data-test-id="test-id-book-title"]');
    expect(title.textContent).toBe(book.data.title);
  });
});
