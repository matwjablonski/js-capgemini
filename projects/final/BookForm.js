import { generateRandomId } from './utils.js';

class BookForm {
  constructor(container, addBookCallback) {
    this.container = container;
    this.prepareForm();
    this.prepareSubmitAction(addBookCallback);
  }

  prepareForm() {
    const form = document.createElement("form");
    form.classList.add("book-form");

    const titleInput = this.prepareField("title", "Tytuł książki");
    const authorInput = this.prepareField("author", "Autor książki");
    const categoryInput = this.prepareField("category", "Kategoria książki");

    form.appendChild(titleInput);
    form.appendChild(authorInput);
    form.appendChild(categoryInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Dodaj książkę";
    form.appendChild(submitButton);

    this.form = form;
    this.container.insertAdjacentElement('beforeend', form);
  }

  prepareField(name, placeholder) {
    const field = document.createElement("input");
    field.type = "text";
    field.name = name;
    field.placeholder = placeholder;
    
    return field;
  }

  prepareSubmitAction(addBookCallback) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      const title = formData.get("title");
      const author = formData.get("author");
      const category = formData.get("category");

      addBookCallback({
        title,
        author,
        category,
        isFavorite: false,
        readTimes: 0,
        id: generateRandomId(),
        owner: "Mateusz Jabłoński",
      })
    });
  }
}

export default BookForm;
