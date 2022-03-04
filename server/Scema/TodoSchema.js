const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  data: { type: String, required: true },
  status: { type: Boolean, required: true },
  mark: { type: Boolean, required: true },
});

const TodoModel = mongoose.model('Todo', TodoSchema);
module.exports = TodoModel;
