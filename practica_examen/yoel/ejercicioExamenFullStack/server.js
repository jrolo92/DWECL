import http from 'http';
import { inventario } from './datos.js';
import { json } from 'stream/consumers';

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }); // Todo OK
    res.end(JSON.stringify(inventario)); // Lo que enviamos al navegador
});

// 3. Le decimos al servidor que se quede "escuchando" en el puerto 3000
servidor.listen(3000);
console.log('Servidor funcionando en el puerto 3000');