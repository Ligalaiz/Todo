const TodoService = require('../Service');

class Controller {
  async create(req, res) {
    try {
      const todo = await TodoService.create(req.body);
      res.json(todo);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const todos = await TodoService.getAll();
      return res.json(todos);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const todo = await TodoService.getOne(req.params.id);
      return res.json(todo);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const todo = req.body;
      if (!todo._id) {
        res.status(400).json({ message: 'Id Не указан' });
      }
      const updatedTodo = await TodoService.update(todo);
      return res.json(updatedTodo);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'Id Не указан' });
      }
      const todo = await TodoService.delete(id);
      return res.json(todo);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

const TodoController = new Controller();

module.exports = TodoController;
