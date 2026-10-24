import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.Scanner;
public class clienteCalculadora{
    public static void main(String[] args){
        Scanner lector = new Scanner(System.in);
        int opcion;
        int numero1, numero2;
        double resultado;
        System.out.println("Servicio de calculos simple...");
        System.out.println("Porporcione los datos de conectividad");
        System.out.println("IP del servidor: ");
        String ip = lector.next();
        try{
            Registry registro1 = LocateRegistry.getRegistry(ip);
            ICalculadoraSimple stubS = (ICalculadoraSimple) registro1.lookup("ServicioCalculadoraSimple");
            Registry registro2 = LocateRegistry.getRegistry(ip);
            ICalculadoraCientifica stubC = (ICalculadoraCientifica) registro2.lookup("ServicioCalculadoraCientifica");

            do{
                System.out.println("-------------------------------------------");
                System.out.println(" 1.- Sumar");
                System.out.println(" 2.- Restar");
                System.out.println(" 3.- Dividir");
                System.out.println(" 4.- Multiplicar");
                System.out.println(" 5.- Raiz cuadrada");
                System.out.println(" 6.- Potencia");
                System.out.println(" 7.- Seno");
                System.out.println(" 8.- coseno");
                System.out.println(" 9.- Tangente");
                System.out.println(" 10.- Constante Pi");
                System.out.println(" 11.- Cambiar signo");
                System.out.println(" 12.- Salir");
                System.out.println("-------------------------------------------");
                System.out.println("Elige un numero entre el uno y el 12");
                opcion = lector.nextInt();
                switch(opcion){
                    case 1:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        System.out.println("dame el segundo numero: ");
                        numero2 = lector.nextInt();
                        resultado = stubS.suma(numero1, numero2);
                        break;
                    case 2:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        System.out.println("dame el segundo numero: ");
                        numero2 = lector.nextInt();
                        resultado = stubS.resta(numero1, numero2);
                        break;
                    case 3:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        System.out.println("dame el segundo numero: ");
                        numero2 = lector.nextInt();
                        if(numero2!=0)
                            resultado = stubS.division(numero1, numero2);
                        else
                            System.out.println("Deves ingresar un numero distinto a cero. ");
                        break;
                    case 4:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        System.out.println("dame el segundo numero: ");
                        numero2 = lector.nextInt();
                        resultado = stubS.multiplicacion(numero1, numero2);
                        break;
                    case 5:
                        System.out.println("dame el numero: ");
                        numero1 = lector.nextInt();
                        resultado = stubC.raizCuadrada(numero1);
                        break;
                    case 6:
                        System.out.println("dame el primer numero: ");
                         numero1 = lector.nextInt();
                         System.out.println("dame el segundo numero: ");
                         numero2 = lector.nextInt();
                        resultado = stubC.potencia(numero1, numero2);
                        break;
                    case 7:
                        System.out.println("dame el numero: ");
                        numero1 = lector.nextInt();
                        resultado = stubC.sen(numero1);
                        break;
                    case 8:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        resultado = stubC.cos(numero1);
                        break;
                    case 9:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        resultado = stubC.tan(numero1);
                        break;
                        case 10:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        resultado = stubC.pi();
                        break;
                        case 11:
                        System.out.println("dame el primer numero: ");
                        numero1 = lector.nextInt();
                        resultado = stubS.masMenos(numero1);
                        break;
                        case 12:
                        System.out.println("Gracias por utilizar nuestros servicio");
                        break;
                        default:
                        System.out.println("Elige una opcion entre 1 y 12");
                        break;
                }
            }while(opcion != 12);
        }catch(Exception e){
            System.out.println("Servicio no disponible, intentelo mas tarde");
        }
    }
}