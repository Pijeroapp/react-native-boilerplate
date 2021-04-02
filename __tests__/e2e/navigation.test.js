describe('as an app user by using navigation I can', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('see the tabs', () => {
    cy.get('a').eq(0);
    cy.get('a').eq(1);
    cy.get('a').eq(2);
  });
  it('click on list tab to visit the list screen', () => {
    cy.get('a').eq(1).click();
    cy.get('[data-testid="todo-list-screen"]');
  });
  it('click on list tab to visit the form screen', () => {
    cy.get('a').eq(2).click();
    cy.get('[data-testid="todo-form-screen"]');
  });
});
