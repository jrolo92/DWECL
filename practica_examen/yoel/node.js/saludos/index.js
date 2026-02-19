import {saludar} from './saludo.js';
import http from 'http';

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Todo OK
    res.end(saludar('yoyi')); // Lo que enviamos al navegador
});

servidor.listen(8080);
console.log('Servidor funcionando en el puerto 8080');

