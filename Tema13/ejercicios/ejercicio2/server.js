// Imports
import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';

// Variables
const app = express();
const router = express.Router();
const __dirname = path.resolve();

// Configuración MongoDB
const url = "mongodb+srv://javi:1234@cluster0.ifquelj.mongodb.net/?appName=Cluster0"
const nombreDb = "miDb";
const client = new MongoClient(url);

// Para leer el JSON enviado desde el HTML
app.use(express.json());

// Ruta para leer usuarios
// Se usa función asincrona para que de tiempo de hacer la comunicación con la db
router.get('/usuarios', async (req, res) => {

    await client.connect();
    const db = client.db(nombreDb);
    // Consulta todos los datos y los devuelve en forma de array
    const usuarios = await db.collection('usuarios').find().toArray();
    res.json(usuarios);
    
});

// Ruta para añadir nuevo usuario
router.post('/nuevo', async (req, res) => {
    await client.connect();
    const db = client.db(nombreDb);
    const nuevoUsuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };
    await db.collection('usuarios').insertOne(nuevoUsuario);
    res.json("Guardado con éxito");
});

// Ruta raíz
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/', router);
app.listen(3000, function () {
    console.log('Servidor en http://localhost:3000')
});