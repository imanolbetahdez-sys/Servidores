import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;
import java.util.Scanner;

public class ServidorCalculadoraSimple implements calculadora {

    public ServidorCalculadoraSimple() {}

    public double sumar(double numero1, double numero2) throws RemoteException {
        return numero1 + numero2;
    }

    public double restar(double numero1, double numero2) throws RemoteException {
        return numero1 - numero2;
    }

    public double multiplicar(double numero1, double numero2) throws RemoteException {
        return numero1 * numero2;
    }

    public double dividir(double numero1, double numero2) throws RemoteException {
        if (numero2 == 0) {
            throw new ArithmeticException("No se puede dividir por cero");
        }
        return numero1 / numero2;
    }

    public double masMenos(double numero1) throws RemoteException {
        return (numero1 * -1);
    }

    public static void main(String[] args) {
        System.out.println("Iniciando el servidor de calculadora simple... CTRL + C para detenerlo");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese la IP de esta PC (Servidor Simple): ");
        String ipLocal = scanner.nextLine();
        
        System.setProperty("java.rmi.server.hostname", ipLocal);

        try {
            ServidorCalculadoraSimple servidor = new ServidorCalculadoraSimple();
            calculadora stub = (calculadora) UnicastRemoteObject.exportObject(servidor, 0);

            Registry registro = LocateRegistry.createRegistry(1099);
            registro.rebind("Calculadora", stub);

            System.out.println("Servicio de Calculadora Simple registrado con éxito en el puerto 1099!");

        } catch (Exception e) {
            System.out.println("Error en el registro del objeto remoto: " + e.getMessage());
        }
    }
}