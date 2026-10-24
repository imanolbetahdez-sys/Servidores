import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.Scanner;

public class clienteCalculadora{
    public static void main(String[] args){
        Scanner lector = new Scanner(System.in);
        int opcion;
        int numero1, numero2, resultado;
        System.out.println("Servicio de calculos simple...");
        System.out.println("Porporcione los datos de conectividad");
        System.out.println("IP del servidor: ");
        String ip = lector.next();
        try{
            Registry registro = LocateRegistry.getRegistry(ip, 1099);
            ICalculadora stub = (ICalculadora) registro.lookup("Calculadora");

            do{
                System.out.println("-------------------------------------------");
                System.out.println(" 1.- Sumar");
                System.out.println(" 2.- Restar");
                System.out.println(" 3.- Dividir");
                System.out.println(" 4.- Multiplicar");
                System.out.println(" 5.- Salir");
                System.out.println("-------------------------------------------");
                System.out.println("Elige un numero entre el uno y el 5");
                opcion = lector.nextInt();
                switch(opcion){
                    case 1:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        System.out.println("dame el segundo numero: ");
                        numero2 = lector.nextInt();
                        resultado = stub.suma(numero1, numero2);
                        System.out.println("El resultado de la suma es: " + resultado);
                        break;
                    case 2:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        System.out.println("dame el segundo numero: ");
                        numero2 = lector.nextInt();
                        resultado = stub.resta(numero1, numero2);
                        System.out.println("El resultado de la resta es: " + resultado);
                        break;
                    case 3:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        System.out.println("dame el segundo numero: ");
                        numero2 = lector.nextInt();
                        if(numero2!=0) {
                            resultado = stub.division(numero1, numero2);
                            System.out.println("El resultado de la division es: " + resultado);
                        } else {
                            System.out.println("Deves ingresar un numero distinto a cero. ");
                        }
                        break;
                    case 4:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        System.out.println("dame el segundo numero: ");
                        numero2 = lector.nextInt();
                        resultado = stub.multiplicacion(numero1, numero2);
                        System.out.println("El resultado de la multiplicacion es: " + resultado);
                        break;
                    case 5:
                        System.out.println("Gracias por usar nuestros servicios. :)");
                        break;
                    default:
                        System.out.println("Elige una opcion entre 1 y 5");
                        break;
                }
            }while(opcion != 5);
        }catch(Exception e){
            System.out.println("Servicio no disponible, intentelo mas tarde");
            System.out.println("Error: " + e);
        }
    }
}