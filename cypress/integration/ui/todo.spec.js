import { TodoMethods } from './TodoMethods';

const delay = 2000;

describe('UI tests', () => {
  const {
    getTodoAddField,
    getAddBtn,
    getTodoItem,
    getTitle,
    getSearchField,
    getDeleteBtn,
    getActiveBtn,
  } = new TodoMethods();

  beforeEach(() => {
    cy.visit('/');
  });

  it('todoItem check component has been created', () => {
    cy.wait(delay);

    getTodoAddField().type('Todo this');
    getAddBtn().click();

    cy.wait(delay);

    cy.get('div[data-testid="todoItemTitle"]')
      .first()
      .should('have.text', 'Todo this');
  });

  it('searchField check todoList was filtered', () => {
    getSearchField().type('Todo this').should('have.value', 'Todo this');

    cy.wait(delay);
    getTodoItem();

    getSearchField().type('{enter}');
    getTitle().first().should('have.text', 'Todo this');
    getTitle().last().should('have.text', 'Todo this');
  });

  it('activeBtn check todoList was filtered by status active', () => {
    getActiveBtn().should('be.visible');

    cy.wait(delay);
    getTodoItem();

    getActiveBtn().click();
    getTodoItem().first().should('have.attr', 'data-status', 'false');
    getTodoItem().last().should('have.attr', 'data-status', 'false');
  });

  it('todoItem check change todo status on done', () => {
    cy.wait(delay);

    getTodoItem().first().should('have.attr', 'data-status', 'false').click();

    cy.wait(delay);

    getTodoItem().should('have.attr', 'data-status', 'true');
  });

  it('doneBtn check todoList was filtered by status done', () => {
    cy.get('button[data-testid="doneBtn"]').should('be.visible');

    cy.wait(delay);
    getTodoItem();

    cy.get('button[data-testid="doneBtn"]').click();
    getTodoItem().first().should('have.attr', 'data-status', 'true');
    getTodoItem().last().should('have.attr', 'data-status', 'true');
    cy.get('button[data-testid="doneBtn"]').click();
  });

  it('todoItem check change todo mark on marked', () => {
    cy.wait(delay);

    getTodoItem().first().should('have.attr', 'data-mark', 'false');

    cy.get('button[data-testid="markBtn"]').first().click();

    getTodoItem().first().should('have.attr', 'data-mark', 'true');

    cy.get('button[data-testid="markBtn"]').first().click();
  });

  it('deleteBtn check todoItem was deleted', () => {
    cy.wait(delay);

    getDeleteBtn().first().should('be.visible').click();

    cy.wait(delay);

    cy.contains('Todo status').should('not.exist');
  });
});
