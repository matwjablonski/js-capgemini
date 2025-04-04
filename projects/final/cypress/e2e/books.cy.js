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

});
