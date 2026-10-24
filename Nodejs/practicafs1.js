const http = require('node:http');
const fs = require('fs');

//modulo hora y fecha
const horaFecha = require('./fecha')

const hostname = '192.168.10.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
fs.readFile('archiv.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error en el archivo:', err);
     res.write('<h1>Error al abrir la pagina<h1>');
    return res.end();
  }else{
    res.write('<h1><p>Practica  - Fecha del sistema<p><h1>');
    res.write('<p>Bienvenido usuario<p>');
    res.write('<hr><hr>');
    res.write('<p>La hora actual es:'+horaFecha.miHoraFecha()+'<p>');
    res.write('<hr><hr>');
    res.write('<p>Este es el contenido del archivo <p>');
    res.write('<p>'+ data + '<p>');
    return res.end();
  }
  
});
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});