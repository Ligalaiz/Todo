class TodoMethods {
  getTodoAddField() {
    return cy.get('input[data-testid="todoAddField"]');
  }

  getAddBtn() {
    return cy.findByRole('button', { name: /add/i });
  }

  getTodoItem() {
    return cy.get('div[data-testid="todoItem"]');
  }

  getTitle() {
    return cy.get(
      'div[data-testid="todoItem"] div[data-testid="todoItemTitle"]',
    );
  }

  getSearchField() {
    return cy.get('input[data-testid="searchField"]');
  }

  getDeleteBtn() {
    return cy.get('button[data-testid="deleteBtn"]');
  }

  getActiveBtn() {
    return cy.get('button[data-testid="activeBtn"]');
  }
}

export { TodoMethods };
