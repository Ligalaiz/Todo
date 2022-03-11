const TodoService = require('../Service');

class Controller {
  async todoCreate({ todo }) {
    try {
      const result = await TodoService.create(todo);
      return result;
    } catch (e) {
      console.log('Ошибка');
      console.log(e.message);
    }
  }

  async todoGetAll() {
    try {
      const todos = await TodoService.getAll();
      return todos;
    } catch (e) {
      console.log(e.message);
    }
  }

  async todoGetOne({ id }) {
    try {
      const todo = await TodoService.getOne(id);
      return todo;
    } catch (e) {
      console.log(e.message);
    }
  }

  async todoUpdate({ todo }) {
    try {
      if (!todo.id) {
        console.log('Id Не указан');
      }
      const updatedTodo = await TodoService.update(todo);
      return updatedTodo;
    } catch (e) {
      console.log(e.message);
    }
  }

  async todoDelete({ id }) {
    try {
      if (!id) {
        console.log('Id Не указан');
      }
      const todo = await TodoService.delete(id);
      return todo;
    } catch (e) {
      console.log(e.message);
    }
  }
}

const TodoController = new Controller();

module.exports = TodoController;
