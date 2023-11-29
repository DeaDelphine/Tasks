// on récupère le crud du controller 
const { allTasks, newTask, getTaskById, updateTaskById, deleteTaskById } = require('../controllers/taskController');
// on fait appelle au router de Express
const router = require('express').Router();

// on implémente les routes de notre crud
router.get('/all', allTasks);
router.post('/new', newTask);
router.get('/:id', getTaskById);
router.put('/:id/edit', updateTaskById);
router.delete('/:id/delete', deleteTaskById);
// on les exportes
module.exports = router;