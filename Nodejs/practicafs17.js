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
    //funcion para localizar el archivo de app
    function getAppData(appName) {
        const platform = os.platform();
        let appDataPath;

        switch (platform) {
            case 'win32':
                //windows
                appDataPath = path.join(process.env.APPDATA || '', appName);
                break;
            case 'darwin':
                //macOS
                appDataPath = path.join(os.homedir(), 'Library', 'Application Support', appName);
                break;
            case 'linux':
                //linux
                appDataPath = path.join(os.homedir(), '.config', appName);
                break;
            case 'freebsd':
                //freebsd
                appDataPath = path.join(os.homedir(), '.config', appName);
                break;
        }
        return appDataPath;
    }
    function getOpenCommand() {
        const platform = os.platform();
        switch (platform) {
            //windows, macOS y linux
            case 'win32':
                return 'start';
            case 'darwin':
                return 'open';
            case 'linux':
                return 'xdg-open';
        }
    }
    //ejemplo de uso
    const appName = 'myapp';
    const appDataPath = getAppData(appName);
    const openCommand = getOpenCommand();

    console.log('Os Platform:', os.platform());
    console.log('App Type:', os.type());
    console.log('Recommended App Data Path:', appDataPath);
    console.log('Command to open files:', openCommand);

    //especificacion de la plataforma y tipo de sistema operativo
    console.log('\nEspecificacion de la plataforma y tipo de sistema operativo:');

    if(os.platform() === 'win32'){
        console.log('Sistema operativo: Windows');
        console.log('Setting up Windows Service');
    } else if(os.platform() === 'darwin'){
        console.log('Sistema operativo: macOS');
        console.log('Setting up launchd agent');
    } else if(os.platform() === 'linux'){
        console.log('Sistema operativo: Linux');
        console.log('Setting up dbus integration');
    }

    const availableMemgb = (os.freemem() / (1024*1024*1024));
    console.log('Memoria disponible: ' + availableMemgb.toFixed(2) + 'GB');
    if (availableMemgb < 0.5) {
        console.log('Advertencia: Memoria disponible baja');
    } else if (availableMemgb < 4) {
        console.log('Advertencia: Memoria disponible moderada');
    } else {
        console.log('Memoria disponible suficiente');
    }

    //ejmplo de nucleos de CPU
    const cpuCount = os.cpus().length;
    console.log('\nNumero de nucleos: ' + cpuCount);
    const recomendedWorkers = Math.max(1, Math.floor(cpuCount / 1));
    console.log('Numero recomendado de workers: ' + recomendedWorkers);
    
    res.end();
});

server.listen(port, host, () => {
    // Nota: El objeto 'res' no existe aquí. Los mensajes de inicio van a la consola.
    console.log(`Server running at http://${host}:${port}/`);
});