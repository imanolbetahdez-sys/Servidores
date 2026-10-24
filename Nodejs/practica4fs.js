const http = require('node:http');
const fs = require('fs');

//modulo hora y fecha
const horaFecha = require('./fecha')

const hostname = '192.168.10.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
fs.readFile('elimina.txt', 'utf8', (err, data) => {
  if (err) {
    res.end('<p>Error al intentar eliminar el archivo. :( <p>');  

  }else{
    res.write('<h1><p>Practica  - Fecha del sistema<p><h1>');
    res.write('<p>Bienvenido usuario<p>');
    res.write('<hr><hr>');
    res.write('<p>La hora actual es:'+horaFecha.miHoraFecha()+'<p>');
    res.write('<hr><hr>');
    res.write('<p>El archivo se elimino del servidor <p>');
    fs.unlink('eliminar.txt', function(err){
        if(err)
            res.end('<p>Error al intentar eliminar el archivo. :( <p>');
        else{
        res.write('<p>El archivo se elimino del servidor<p>');
        console.log('Archivo borrado.');
        return res.end();
        }
    });
  }
});
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});