/**
 * @jest-environment jsdom
 */
import { jest } from '@jest/globals';
import { App } from './app.js';

global.fetch = jest.fn();
describe('App', () => {
  let container;
  let app;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    app = new App(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    jest.clearAllMocks();
  });

  test('should create a new App instance', () => {
    expect(app).toBeInstanceOf(App);
  });

  test('should fetch book from API', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([
        { title: 'Book 1', author: 'Author 1', category: 'Category 1', isFavorite: false },
      ]),
    });

    await app.fetchBooks();

    expect(fetchMock).toHaveBeenCalledWith('./data.json');
    fetchMock.mockRestore();
  });
})
