import java.rmi.server.UnicastRemoteObject;
import java.rmi.RemoteException;

public class calculadoraSimpleImplement extends UnicastRemoteObject implements ICalculadoraSimple{

    public calculadoraSimpleImplement() throws RemoteException{
        super();
    }
    public double suma(int numero1, int numero2) throws RemoteException{
        return numero1 + numero2;
    }
    public double resta(int numero1, int numero2) throws RemoteException{
        return numero1 - numero2;
    }
    public double multiplicacion(int numero1, int numero2) throws RemoteException{
        return numero1 * numero2;
    }
    public double division(int numero1, int numero2) throws RemoteException{
        return numero1 / numero2;
    }
    public double masMenos(int numero1) throws RemoteException{
        return (numero1 * -1);
    }

}