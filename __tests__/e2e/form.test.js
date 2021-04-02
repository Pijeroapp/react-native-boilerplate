describe('as an app user by using form I can', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a').eq(2).click();
  });
  it('submit form', () => {
    cy.get('[data-testid="submit-btn"]').click();
  });
  it('enter task name', () => {
    cy.get('input[type=text]').type('take out trash');
  });
  it('toggle task', () => {
    cy.get('input[type=checkbox]').click();
  });
});
