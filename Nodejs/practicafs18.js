//crear un monitor de recuros del sistema operativo que se actuialice cada segundo y que muestre la informacion en un archivo html
import { format } from 'node:path';
import { bytes, json } from 'node:stream/consumers';

const http = require('node:http');
const fs = require('fs');
const os = require('os');

const fecha = require('./fecha.js');

const host = 'localhost'; // o 127.0.0.1
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1><p>Practica no 16: Manejo de Informacion del sistema Operativo  </p></h1>')
    res.write('<p>Bienvenido Usuario</p>');
    res.write('<hr>');
    res.write('<p>La hora actual es:' + fecha.miHoraFecha() + '</p>' );
    res.write('<p>Esta practica genera un informe exhaustivo de informacion del sistema</p>');

    function monitoreorecurso() {
        console.clear();

        const now = new Date().toLocaleDateString();
        console.log(`Monitor de Recursos - ${now}`);

        //Cpu en uso 
        const cpus = os.cpus();
        console.log(`CPU: ${cpus.length}`);

        //calcular el porcentaje de uso de la CPU
        const cpuUsage = cpus.map((cpu, index) => {
            const total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);
            const idle = cpu.times.idle;
            const usage = ((total - idle) / total + 100).toFixed(1);
            return `Core ${index + 1}: ${usage}%`;
        });
        console.log(`Uso de CPU: ${cpuUsage.join('\n')}`);
    }
    //memoria en uso
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;

    console.log('\nMemoria:');
    console.log(`Total: ${(formatBytes(totalMemory))} MB`);
    console.log(`Libre: ${(formatBytes(freeMemory))} MB (${((freeMemory / totalMemory) * 100).toFixed(1)}%)`);
    console.log(`Usada: ${(formatBytes(usedMemory))} MB (${((usedMemory / totalMemory) * 100).toFixed(1)}%)`);
    //system uptime
    console.log(`Tiempo de actividad del sistema: ${formatUptime(os.uptime())}`);
    //informacion de procesos
    console.log('Informacion de procesos:');
    console.log('PID: ' + process.pid);
    console.log('Uso de memoria del proceso: ' + formatBytes(process.memoryUsage().rss) + ' MB');
    console.log('Usuario: ' + os.userInfo().username);

    function formatBytes(bytes) {
        const tamano = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + tamano[i];
    }

    function formatUptime(segundos) {
        const dias = Math.floor(segundos / (60*60*24));
        const horas = Math.floor((segundos % (60*60*24)) / (60*60));
        const minutos = Math.floor((segundos % (60*60)) / 60);
        const segundos = Math.floor(segundos % 60);
        return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
    //llamar a la funcion cada segundo
    monitoreorecurso();
    const interval = setInterval(monitoreorecurso, 1000);

    res.end();
});

server.listen(port, host, () => {
    // Nota: El objeto 'res' no existe aquí. Los mensajes de inicio van a la consola.
    console.log(`Server running at http://${host}:${port}/`);
});