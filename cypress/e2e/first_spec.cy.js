describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.wait(2000);
    cy.get(".navbar-header").click();
  })
})