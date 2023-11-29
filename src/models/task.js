// on fait appel à mongoose set sa méthode Schema qui est un schéma de model type
const { mongoose, Schema } = require("mongoose");
// on crée un schéma de model type
const taskSchema = new Schema({
    title: String,
    description: String,  
    completed: { type: Boolean, default: false }
});
// on crée notre objet type et on l'exporte
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;