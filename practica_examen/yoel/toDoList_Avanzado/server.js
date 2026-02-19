import express from 'express';
import http from 'http';
// import {tareas} from './datos.js';

// Datos simulados (puedes sacarlos a un datos.js si prefieres)
const tareas = [
    { id: 1, titulo: "Configurar servidor Express", estado: "completada" },
    { id: 2, titulo: "Crear interfaz en TypeScript", estado: "pendiente" },
    { id: 3, titulo: "Aprobar el examen de DWECL", estado: "pendiente" },
    { id: 4, titulo: "Aprender a usar Fetch", estado: "completada" }
];

// Inicializamos la aplicación Express
const app = express();

// Middleware para habilitar CORS a todas las rutas de Express
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Ruta 1: Devuelve TODAS las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas);
});

// Ruta 2: Devuelve las tareas filtradas por su estado (ruta dinámica)
// Ejemplo de uso desde el cliente: http://localhost:3000/tareas/estado/pendiente
app.get('/tareas/estado/:estado', (req, res) => {
    const estadoSolicitado = req.params.estado; // Capturamos el parámetro de la URL
    
    // Filtramos el array
    const tareasFiltradas = tareas.filter(tarea => tarea.estado === estadoSolicitado);
    
    // Devolvemos el resultado en JSON
    res.json(tareasFiltradas);
});

// Envolvemos Express con el módulo HTTP nativo
const server = http.createServer(app);

// Levantamos el servidor
server.listen(3000, () => {
    console.log('Servidor Express + HTTP funcionando en http://localhost:3000');
});