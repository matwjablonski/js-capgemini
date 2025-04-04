describe('Books App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display the correct title', () => {
    cy.get('h1').should('contain', 'Witaj w naszej aplikacji książkowej');
  });

  it('should display a list of books', () => {
    cy.get('.books-list').should('exist');
    cy.get('.book-item').should('have.length.greaterThan', 0);
  });

  it('should add a new book', () => {
    cy.get('input[name="title"]').type('Nowa książka');
    cy.get('input[name="author"]').type('Nowy autor');
    cy.get('input[name="category"]').type('Nowa kategoria');
    cy.get('.book-form button[type="submit"]').click();

    cy.get('.books-list').should('contain', 'Nowa książka');
  });

  it('should toggle favorite status', () => {
    cy
      .get('.book-item')
      .first()
      .find('.action-button')
      .should('contain', 'Dodaj do ulubionych')
      .click();
    
    cy
      .get('.book-item')
      .first()
      .should('have.class', 'favorite');

    cy
      .get('.book-item')
      .first()
      .find('.action-button')
      .should('contain', 'Usuń z ulubionych')
      .click();

    cy
      .get('.book-item')
      .first()
      .should('not.have.class', 'favorite');
  });

});
