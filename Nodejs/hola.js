const http = require('node:http');
const horaFecha = require('./fecha')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.write('<h1><p>Practica 1 - Fecha del sistema<p><h1>');
res.write('<p>Bienvenido usuario<p>');
res.write('<hr><hr>');
res.end('<p>La hora actual es:'+horaFecha.miHoraFecha()+'<p>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});