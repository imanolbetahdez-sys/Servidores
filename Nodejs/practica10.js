const horaFecha = require('./fecha');

const http = require('node:http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

 const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1><p>Practica10  - manejo de rutas<p><h1>');
        res.write('<hr><hr>');
        res.write('<p>La hora actual es:'+horaFecha.miHoraFecha()+'</p>')
        res.write('<p>Paths relativos y paths absolutos</p>');
        var ruta1 = 'Z:\\programacionCS\\Nodejs\\archivoo.txt'
        var ruta2 = 'Z:\\ciberseguridad\\textoEncriptado.txt'
        res.write('<p>Información del path del archivo, ruta relativa basica.</p>');
        res.write('<p>'+path.relative(ruta1, ruta2)+'</p>');

        var ruta1 = 'Z:\\programacionCS\\Nodejs\\archivoo.txt'
        var ruta2 = 'Z:\\programacionCS\\Nodejs\\nuevoArchivo.txt'
        res.write('<p>Información del path del archivo, mismo directorio.</p>');
        res.write('<p>'+path.relative(ruta1, ruta2)+'</p>');
       
        var ruta1 = 'Z:\\programacionCS\\Nodejs\\archivoo.txt'
        res.write('<p>Información del path del archivo, mismo archivo.</p>');
        res.write('<p>'+path.relative(ruta1, ruta1)+'</p>');

        //Creando un path para un servidor web como apache, subre un sistema linux
        const pathAbsouluto = '/var/www/static/images/logo.png';
        const rootWeb = '/var/www';

        const pathWeb = path.relative(rootWeb,pathAbsouluto).replace(/\\/g, '/');
        res.write('<p>Creando path relativo para un servidor web </p>');
        res.write('<p>'+pathWeb+'</p>')

        res.end();
 });


 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});