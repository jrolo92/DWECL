// Importsmos las librerias
import express from 'express';
import path from 'path';

// Variables necesarias
const app = express();
const router = express.Router();
var __dirname = path.resolve();

// Si entramos a la raíz se muestra el index.html
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// En /pagAjax se va a guardar el json (res.json lo devuelve parseado)
router.get('/pagAjax', function(req, res){
    res.json({
        "nombre": "Javi",
        "apellido": "Rodríguez"
    });
});


app.use('/', router);
app.use(express.static(__dirname));

// Activa el servidor en el puerto 3000
app.listen(3000, function (){
    console.log('Escuchando en el puerto 3000');
});