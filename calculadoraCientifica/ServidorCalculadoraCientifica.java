import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;
import java.util.Scanner;

public class ServidorCalculadoraCientifica implements ICalculadoraCientifica {

    public ServidorCalculadoraCientifica() {}

    public double raizCuadrada(double numero) throws RemoteException {
        return Math.sqrt(numero);
    }

    public double potencia(double base, double exponente) throws RemoteException {
        return Math.pow(base, exponente);
    }

    public double sen(double numero1) throws RemoteException {
        return Math.sin(numero1);
    }

    public double cos(double numero1) throws RemoteException {
        return Math.cos(numero1);
    }

    public double tan(double numero1) throws RemoteException {
        return Math.tan(numero1);
    }

    public double pi() throws RemoteException {
        return Math.PI;
    }

    public static void main(String[] args) {
        System.out.println("Iniciando el servidor de calculadora científica... CTRL + C para detenerlo");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese la IP de esta PC (Servidor Científico): ");
        String ipLocal = scanner.nextLine();

        System.setProperty("java.rmi.server.hostname", ipLocal);

        try {
            ServidorCalculadoraCientifica servidor = new ServidorCalculadoraCientifica();
            ICalculadoraCientifica stub1 = (ICalculadoraCientifica) UnicastRemoteObject.exportObject(servidor, 0);

            Registry registro = LocateRegistry.createRegistry(1098);
            registro.rebind("CalculadoraCientifica", stub1);

            System.out.println("Servicio Científico registrado con éxito en el puerto 1098!");

        } catch (Exception e) {
            System.out.println("Error en el registro del objeto remoto: " + e.getMessage());
        }
    }
}