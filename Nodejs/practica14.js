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
    res.write('<h1>Practica14 - Informacion de sistemas operativos</h1>');
    res.write('<hr><hr>');
    res.write('<p>La hora actual es: ' + horaFecha.miHoraFecha() + '</p>');
    res.write('<p>Modulo os</p>'); 
    
    // Información básica del sistema operativo
    res.write('Informacion basica del sistema');
    res.write('<p>Plataforma: ' + `${os.platform()}` + '</p>');
    res.write('<p>Tipo de sistema: ' + `${os.type()}` + '</p>');
    res.write('<p>Version de liberacion: ' + `${os.release()}` + '</p>');
    res.write('<p>Version: ' + `${os.version()}` + '</p>');
    res.write('<p>Arquitectura: ' + `${os.arch()}` + '</p>');
    
    const cpus = os.cpus();
    // CORRECCIÓN: .length es una propiedad, no una función. Se eliminaron los paréntesis.
    res.write('<p>Numero de procesadores: ' + `${cpus.length}` + '</p>');
    
    cpus.forEach((cpu, index) => {
        res.write('<p>Cores: ' + `${index + 1}` + '</p>');
        res.write('<p>Modelo: ' + `${cpu.model}` + '</p>');
        res.write('<p>Velocidad: ' + `${cpu.speed}` + 'MHz' + '</p>');
    });
    
    res.write('<p>Host: ' + `${os.hostname()}` + '</p>');
    
    // Información sobre la red
    const interfacesDeRed = os.networkInterfaces();
    Object.entries(interfacesDeRed).forEach(([name, addresses]) => {
        res.write('<p>Interfaz: ' + `${name}` + '</p>');
        addresses.forEach((address) => {
            res.write('<p>Familia: ' + `${address.family}` + '</p>');
            res.write('<p>Direccion: ' + `${address.address}` + '</p>');
            res.write('<p>Mascara de red: ' + `${address.netmask}` + '</p>');
            res.write('<p>Direccion mac: ' + `${address.mac}` + '</p>');
            res.write('<p>Interna: ' + `${address.internal}` + '</p>');
        });
    });

    const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
    const totalMemLibre = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
    res.write('<p>Total de memoria : ' + `${totalMemGB}` + 'GB</p>');
    res.write('<p>Memoria Disponible : ' + `${totalMemLibre}` + 'GB</p>');
    res.write('<hr><hr>');

    // Tiempo en segundos en el que el sistema ha estado en actividad
    const tiempoActivo = os.uptime(); // CORRECCIÓN: Se corrigió el error tipográfico en la variable
    res.write('<p>Tiempo de actividad: ' + `${tiempoActivo}` + ' segundos</p>'); // CORRECCIÓN: Uso correcto de la variable interpolada
    
    const tiempoDeActividadDias = Math.floor(tiempoActivo / (60 * 60 * 24));
    const tiempoDeActividadHora = Math.floor((tiempoActivo % (60 * 60 * 24)) / (60 * 60));
    const tiempoDeActividadMinuto = Math.floor((tiempoActivo % (60 * 60)) / 60);
    const tiempoDeActividadSegundo = Math.floor(tiempoActivo % 60);
    
    // CORRECCIÓN: Se reemplazó `${tiem7}` por `${tiempoDeActividadHora}`
    res.write('<p>El sistema ha estado activo por: ' + `${tiempoDeActividadDias}` + ' Dias ' + `${tiempoDeActividadHora}` + ' Horas ' + `${tiempoDeActividadMinuto}` + ' Minutos ' + `${tiempoDeActividadSegundo}` + ' Segundos</p>');
    
    res.write('<hr>'); // CORRECCIÓN: Se agregó la etiqueta HTML correcta

    const infoUser = os.userInfo();
    res.write('<p>Usuario actual : ' + `${infoUser.username}` + '</p>');
    res.write('<p>Directorio raiz (Home): ' + `${os.homedir()}` + '</p>'); // NOTA: Decía "Memoria Disponible" por error lógico
    res.write('<hr><hr>');

    if (os.platform() === 'win32') {
        res.write('<p>Shell / Entorno Windows</p>');
    } else if (infoUser.shell) {
        res.write('<p>Shell: ' + `${infoUser.shell}` + '</p>');
    } 
    res.write('<hr>');    

    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});