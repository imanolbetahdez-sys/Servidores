import java.rmi.server.UnicastRemoteObject;
import java.rmi.RemoteException;

public class calculadoraImplement extends UnicastRemoteObject implements ICalculadora{

    public calculadoraImplement() throws RemoteException{
        super();
    }
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

}