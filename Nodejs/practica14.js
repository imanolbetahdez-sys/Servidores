const horaFecha = require('./fecha');
const http = require('node:http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { constants } = require('node:buffer');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Practica14  - Informacion de sistemas operativos</h1>');
    res.write('<hr><hr>');
    res.write('<p>La hora actual es:' + horaFecha.miHoraFecha() + '</p>');
    res.write('<p>Modulo os</p>'); 
    //informacion basica del sistema operativo.
    res.write('Informacion basica del sistema');
    res.write('<p>Plataforma: '+ `${os.platform()}`+'</p>');
    res.write('<p>Tipo de sistema: '+ `${os.type()}`+'</p>');
    res.write('<p>Version: '+ `${os.release()}`+'</p>');
    res.write('<p>Arquitectura: '+ `${os.arch()}`+'</p>');
    res.write('<p>Host: '+ `${os.hostname()}`+'</p>');

    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});