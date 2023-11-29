// on importe notre modele type
const Task = require('../models/task');

// méthodes du crud permettant de récupérer toutes nos tâches
const allTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.json({ message: error.message });
    }
}
// méthodes du crud permettant de créer une tâches
const newTask = async (req, res) => {
    try {
        const newtask = new Task(req.body);
        await newtask.save();
        res.json(newtask);
    } catch (error) {
        res.json({ message: error.message });
    }
}
// méthodes du crud permettant de récupérer une tâche via son Id
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        res.json({ message: error.message });
    }
}
// méthodes du crud permettant de modifier une tâche via son Id
const updateTaskById = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.json({ message: error.message });
    }
}
// méthodes du crud permettant de supprimer une tâche via son Id
const deleteTaskById = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.json(task);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// on exporte nos méthodes
module.exports = { allTasks, newTask, getTaskById, updateTaskById, deleteTaskById };
