import java.rmi.Remote;
import java.rmi.RemoteException;
public interface ICalculadoraSimple extends Remote{

    public double suma(int numero1, int numero2) throws RemoteException;
    public double resta(int numero1, int numero2) throws RemoteException;
    public double multiplicacion(int numero1, int numero2) throws RemoteException;
    public double division(int numero1, int numero2) throws RemoteException;
    public double masMenos(int numero1) throws RemoteException;

}