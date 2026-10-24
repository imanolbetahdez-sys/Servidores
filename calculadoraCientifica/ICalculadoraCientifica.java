import java.rmi.Remote;
import java.rmi.RemoteException;
public interface ICalculadoraCientifica extends Remote{

    public double raizCuadrada(int numero1) throws RemoteException;
    public double potencia(int numero1, int numero2) throws RemoteException;
    public double sen(int numero1) throws RemoteException;
    public double cos(int numero1) throws RemoteException;
    public double tan(int numero1) throws RemoteException;
    public double pi() throws RemoteException;
}