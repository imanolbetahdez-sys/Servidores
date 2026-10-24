const horaFecha = require('./fecha');

const http = require('node:http');
const fs = require('fs');
const path = require('path');

const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;
var recursoUrl = 'http://127.0.0.1:3000/index.html?user=imanol&pass=1234'
 const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1><p>Practica9  - url<p><h1>');
    var consulta = url.parse(recursoUrl, true);
    var datos = consulta.query;
    var usuario = datos.user
    var password = datos.pass;
    var servidor = consulta.host;
    var ruta = consulta.pathname;
    var recurso = consulta.search;
        res.write('<p>Bienvenido usuario '+usuario+'</p>');
        res.write('<hr><hr>');
        res.write('<p>La hora actual es:'+horaFecha.miHoraFecha()+'</p>')
        res.write('<p>URL: '+consulta+'</p>');
         res.write('<p>Password: '+ password+'</p>');
        res.write('<p> Servidor: '+servidor+'</p>');
        res.write('<p>Path: '+ruta+'</p>');
        res.write('<p>Recurso: '+recurso+'</p>');

        res.end();
 });


 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});