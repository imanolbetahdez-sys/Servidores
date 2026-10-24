const horaFecha = require('./fecha');

const http = require('node:http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const configRuta  = path.join(__dirname, 'config', 'app-config.json');

const nombreArchivo = path.basename('Z:\\programacionCS\\hola.txt', '.txt');
const nombreArchivo2 = path.basename('Z:\\topicos\\2926.sql');
 const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1><p>Practica8  - Manejo de rutas<p><h1>');
        res.write('<p>Bienvenido usuario<p>');
        res.write('<hr><hr>');
        res.write('<p>La hora actual es:'+horaFecha.miHoraFecha()+'<p>')
        res.write('<p>El archivo consultado es:'+ nombreArchivo + '<p>');
        res.write('<p>El archivo consultado es:'+ nombreArchivo2 + '<p>');
        res.write('<p>El nombre del directorio es:'+ __dirname + '<p>');
        res.write('<p>El nombre del directorio es:'+ __filename + '<p>');

        res.write('<p>Ruta del path configurada: '+configRuta+'<p>');
        res.write('<p>directorio usado en ruta configurada: '+path.dirname(__filename)+'<p>');
        console.log(nombreArchivo)
        res.end();
 });


 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
