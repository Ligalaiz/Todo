const TodoModel = require('../Scema');

class Service {
  async create(todo) {
    const createdTodo = await TodoModel.create(todo);
    return createdTodo;
  }

  async getAll() {
    const todos = await TodoModel.find();
    return todos;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const todo = await TodoModel.findById(id);
    return todo;
  }

  async update(todo) {
    const updatedTodo = await TodoModel.findByIdAndUpdate(todo.id, todo, {
      new: true,
    });
    return updatedTodo;
  }

  async delete(id) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const todo = await TodoModel.findByIdAndDelete(id);
    return todo;
  }
}

const TodoService = new Service();

module.exports = TodoService;
