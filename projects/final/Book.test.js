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

  test('should render book author', () => {
    const author = book.container.querySelector('[data-test-id="test-id-book-author"]');
    expect(author.textContent).toBe(book.data.author);
  });

  test('should render book category', () => {
    const category = book.container.querySelector('.book-category');
    expect(category.textContent).toBe(`Kategoria: ${book.data.category}`);
  });

  test('should add favorite class if book is favorite', () => {
    book.data.isFavorite = true;
    book.prepareBookItem();
    expect(book.container.classList.contains('favorite')).toBe(true);
  });

  test('should render an action button', () => {
    const actionButton = book.container.querySelector('.action-button');
    expect(actionButton).not.toBeNull();
  });

  test('should toggle favorite status on button click', () => {
    const actionButton = book.container.querySelector('.action-button');
    actionButton.click();
    expect(book.data.isFavorite).toBe(true);
    actionButton.click();
    expect(book.data.isFavorite).toBe(false);
  });

  test('should change button text based on favorite status', () => {
    const actionButton = book.container.querySelector('.action-button');
    expect(actionButton.textContent).toBe('Dodaj do ulubionych');
    actionButton.click();
    expect(actionButton.textContent).toBe('Usuń z ulubionych');
  });
});
