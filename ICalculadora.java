import java.rmi.Remote;
import java.rmi.RemoteException;
public interface ICalculadora extends Remote{

    public int suma(int numero1, int numero2) throws RemoteException;
    public int resta(int numero1, int numero2) throws RemoteException;
    public int multiplicacion(int numero1, int numero2) throws RemoteException;
    public int division(int numero1, int numero2) throws RemoteException;

}