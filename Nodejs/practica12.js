const horaFecha = require('./fecha');

const http = require('node:http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

 const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1><p>Practica12  - manejo de rutas<p><h1>');
        res.write('<hr><hr>');
        res.write('<p>La hora actual es:'+horaFecha.miHoraFecha()+'</p>')
        res.write('<p>Paths relativos y paths absolutos</p>'); 
        
        //windows
        res.write('¿Es ruta absouluta? '+ path.isAbsolute('Z:\\programacionCS\\')+'<br>');//true
        res.write('¿Es ruta absouluta? '+ path.isAbsolute('programacionCS')+'<br>');//false

        //linux
        res.write('¿Es ruta absouluta? '+path.isAbsolute('/user/docs')+'<br>');//true
        res.write('¿Es ruta absouluta? '+path.isAbsolute('user/docs')+'<br>');//false
        
        //rutas de red
        res.write('¿Es ruta absouluta? '+path.isAbsolute('\\\\server\\share')+'<br>');//true

        //ejemplo para asegurar una ruta absoluta para los archivos de configuracion 
        function ensureAbsolute(configPath){
            return path.isAbsolute(configPath) ? configPath : path.relative(process.cwd(), configPath);
        }
        
        res.write(ensureAbsolute('config.json')+'<br>');
        res.write(ensureAbsolute('/etc/app/config.json')+'<br>');


        res.end();
 });


 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});