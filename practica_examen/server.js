// Importamos las librerias
import express from 'express';
import path from 'path';
import * as fs from 'fs/promises';

// Vv necesarias
const app = express();
const router = express.Router();
var __dirname = path.resolve();

// Ruta principal (muestra el html)
router.get('/', function (req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Ruta asincrona para los productos
router.get('/productos', async function (req, res){
    try{
        const productos = await fs.readFile('./articulos.json', 'utf-8');
        res.json(JSON.parse(productos));
    } catch (error){
        res.status(500).json({ error: "No se pudo leer el JSON"});
    }
});

app.use('/', router);
app.use(express.static(__dirname));


app.listen(3000, function (){
    console.log('Escuchando en el puerto 3000');
});

