package exercicio1;
import java.util.Scanner;
public class Q1 {
	
    public static Scanner entrada;
	public static void main(String[] args) {
  entrada = new Scanner(System.in);
     double A, B, C, result;
     
     System.out.println("Digite um n�mero:");
     A = entrada.nextDouble();
     System.out.println("Digite mais um n�mero:");
     B = entrada.nextDouble();
     System.out.println("Digite mais um n�mero:");
     C = entrada.nextDouble();
     
     result =(A+B)/C;
     
     System.out.println("O resultado �:" + result);
     
	}

}
