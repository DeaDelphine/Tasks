// initialisation projet MongoDB 
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 6789;

//Connexion avec nos Taskroute
const taskRoute = require("./src/routes/taskRoute");

// Connexion à la base de données 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tasks_db');
console.log(`📚[DATABASE] MongoDB is running 🔥`)
}
// ustilisation du Json pour afficher les données 
app.use(express.json());
// permet d'encoder les donnée et qu'il n'apparaissent pas dans l'url du endpoint
app.use(express.urlencoded({ extended: false }));

//Utilisation de la route
app.use('/api/task', taskRoute);


// permet d'écouter le port de l'application définit plus haut
app.listen(port, () => {
  console.log(`[SERVER] is runinning on port ${port}`)
});
