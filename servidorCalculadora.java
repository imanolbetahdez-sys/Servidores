import java.rmi.server.UnicastRemoteObject;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.Naming;
import java.net.InetAddress;

public class servidorCalculadora implements ICalculadora{

    servidorCalculadora(){}
        public int suma(int numero1, int numero2) throws RemoteException{
            return numero1 + numero2;
        }
        public int resta(int numero1, int numero2) throws RemoteException{
            return numero1 - numero2;
        }
        public int multiplicacion(int numero1, int numero2) throws RemoteException{
            return numero1 * numero2;
        }
        public int division(int numero1, int numero2) throws RemoteException{
            return numero1 / numero2;
        }


    public void registrarObjetoRemoto(){
        //Registro del servicio remoto Stubs
        try{
            // Obtiene automaticamente la IP de la maquina servidor
            String ipServidor = InetAddress.getLocalHost().getHostAddress();
            System.setProperty("java.rmi.server.hostname", ipServidor);
            System.out.println("IP detectada del servidor: " + ipServidor);

            // Creacion de instancia de la referencia remota
            ICalculadora stub = new calculadoraImplement();

            // Crea e inicia el registro RMI en el puerto 1099
            Registry registro = LocateRegistry.createRegistry(1099);
            registro.rebind("Calculadora", stub);
            System.out.println("Servicio registrado con exito!");

        }catch(Exception e){
            System.out.println("Ocurrio un error al registrar el registro intentelo mas tarde");
            System.out.println("Error: "+ e);
        }
    }
    public static void main(String[] args){
        System.out.println("Iniciando el servidor, pulse ctrl + c para salir");
        servidorCalculadora servidor = new servidorCalculadora();
        servidor.registrarObjetoRemoto();
    }
}