import http from 'http';
import { productos } from './datos.js';

const server = http.createServer((req, res) => {
    // Es buena práctica configurar el CORS de forma general para evitar problemas
    res.setHeader('Access-Control-Allow-Origin', '*');

    // 1. Comprobamos si la ruta es exactamente '/productos' y el método es 'GET'
    if (req.method === 'GET' && req.url === '/productos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(productos));
    } 
    // 2. Si intentan acceder a cualquier otra ruta, devolvemos un error 404
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error 404: Ruta no encontrada. Prueba con /productos');
    }
});

server.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});