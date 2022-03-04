const Router = require('express');
const TodoController = require('../Controller');

const router = Router();

router.post('/todos', TodoController.create);
router.get('/todos', TodoController.getAll);
router.get('/todos/:id', TodoController.getOne);
router.put('/todos', TodoController.update);
router.delete('/todos/:id', TodoController.delete);

module.exports = router;
