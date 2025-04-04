class BookAbstract {
  data;

  constructor(data) {
    this.data = data;

    if (new.target === BookAbstract) {
      throw new Error("Nie można utworzyć instancji klasy Book");
    }

    this.prepareBookItem();
  }

  prepareBookItem() {
    throw new Error("Should be implemented in child class");
  }

  handleFavorite() {
    throw new Error("Should be implemented in child class");
  }
}

class Book extends BookAbstract {
  container;
  data;

  constructor(data) {
    super(data);

    this.data = data;
    this.prepareBookItem();
  }

  prepareBookItem() {
    const bookItem = document.createElement("li");
    bookItem.classList.add("book-item");

    if (this.data.isFavorite) {
      bookItem.classList.add("favorite");
    }

    this.container = bookItem;

    this.renderTitle();
    this.renderAuthor();
    this.renderCategory();

    this.renderActionButton();
  }

  renderTitle() {
    const bookTitle = document.createElement("h2");
    bookTitle.dataset.testId = "test-id-book-title";
    bookTitle.textContent = this.data.title;

    this.container.appendChild(bookTitle);
  }

  renderAuthor() {
    const {
      data: {
        author,
      },
      container,
    } = this;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = author;

    container.appendChild(bookAuthor);
  }
  
  renderCategory() {
    const bookCategory = document.createElement("p");
    bookCategory.textContent = `Kategoria: ${this.data.category}`;
    bookCategory.classList.add("book-category");
  
    this.container.appendChild(bookCategory);
  }

  renderActionButton() {
    const action = document.createElement("button");
    action.textContent = this.prepareTextForActionButton();
  
    action.classList.add("action-button");
    this.container.appendChild(action);

    action.addEventListener('click', this.handleFavorite.bind(this));
  }

  prepareTextForActionButton() {
    return this.data.isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych";
  }

  handleFavorite(event) {
    const {
      container,
    } = this;
    this.data.isFavorite = !this.data.isFavorite;
    event.target.textContent = this.prepareTextForActionButton();
    container.classList.toggle("favorite");
  }
}

export default Book;
