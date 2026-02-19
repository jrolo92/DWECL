// 1. Importamos el módulo nativo 'http'
import http from 'http';

// 2. Creamos el servidor. Recibe una Petición (req) y envía una Respuesta (res)
const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Todo OK
    res.end('¡Hola desde mi servidor Node.js!'); // Lo que enviamos al navegador
});

// 3. Le decimos al servidor que se quede "escuchando" en el puerto 3000
servidor.listen(3000);
console.log('Servidor funcionando en el puerto 3000');