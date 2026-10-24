import java.rmi.server.UnicastRemoteObject;
import java.rmi.RemoteException;

public class calculadoraCientificaImplement extends UnicastRemoteObject implements ICalculadoraCientifica{

    public calculadoraCientificaImplement() throws RemoteException{
        super();
    }
        public double raizCuadrada(int numero1) throws RemoteException{
            return Math.sqrt(numero1);
        }
        public double potencia(int numero1, int numero2) throws RemoteException{
            return Math.pow(numero1, numero2);
        }
        public double sen(int numero1) throws RemoteException{
            return Math.sin(numero1);

        }
        public double cos(int numero1) throws RemoteException{
            return Math.cos(numero1);
        }
        public double tan(int numero1) throws RemoteException{
            return Math.tan(numero1);
        }
        public double pi() throws RemoteException{
            return Math.PI;
        }

}