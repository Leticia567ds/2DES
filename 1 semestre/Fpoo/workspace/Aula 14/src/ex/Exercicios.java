package ex;

import java.util.Scanner;

public class Exercicios {
	 
public static Scanner entrada = new Scanner(System.in);
	public static void main(String[] args) {
		
		int menu = 0;
		while (menu != 5) {
			System.out.println("1.N�meros pares\n 2.N�meros �mpares\n 3.Encontrar o maior e menor\n 4.Fatorial\n 5.Valor do xerex\n 6.Soma dos pares e �mpares\n 7.Sair\n");
			menu = entrada.nextInt();
			switch (menu) {
			case 1:
				parNumber();
				break;
			case 2:
				impNumber();
				break;
			case 3:
				lerNumb();

				break;
			case 4: 
				fatorial();
				break;
			case 5:
				valorXer();
				break;
			case 6:
				break;
			case 7:
				System.out.println("Bye Bye:)");
				break;
				 
					
			}
		}
	}

	public static void parNumber() {
		
		int num1, num2;

		System.out.println("Digite o Primeiro Valor: ");
		num1 = entrada.nextInt();

		System.out.println("Digite o Segundo Valor: ");
		num2 = entrada.nextInt();
		if (num1 % 2 != 0) {
			num1++;
		}

		for (int i = num1; i < num2; i += 2) {

			System.out.println(i);

		}

	}

	public static void impNumber() {
		int num1, num2;

		System.out.println("Digite o Primeiro Valor: ");
		num1 = entrada.nextInt();

		System.out.println("Digite o Segundo Valor: ");
		num2 = entrada.nextInt();
		if (num1 % 2 == 0) {
			num1++;
		}
		for (int i = num1; i < num2; i += 2) {

			System.out.println(i);

		}

	}

	public static void lerNumb() {
		 
		int num1[] = new int[10];
		int or = 0;
		int la = 10;
		for (int i = 0; i < 10; i++) {

			System.out.print("Digite um inteiro Valor ate 10: ");
			num1[i] = entrada.nextInt();

		}
		for (int i = 0; i < num1.length; i++) {
			if (or < num1[i]) {
				or = num1[i];
			}
			if (la > num1[i]) {
				la = num1[i];
			}
		}
		System.out.println("O maior n�mero: " + or);
		System.out.println("O menor n�mero �:" + la);

	}
	public static void fatorial(){
		
		int numb1,acum;
		
		
		System.out.println("Digite um Valor:");
		numb1 = entrada.nextInt();
		acum = numb1;
		for(int i = 0; i < numb1; i++ ){
			acum = acum*(numb1 - i);
			System.out.println(acum);
		}
		
		System.out.println("O seu n�mero digitado em fatorial �:"+acum);
	}
<<<<<<< HEAD
	
	public static void valorXer(){
		double val1,acum = 0;
		
		  System.out.println("Digite o valor do Xerox:");
  val1 = entrada.nextDouble();
 int[]number = new int[200];
 for(i = 0; i <= number; i++) {
	 acum = (double) i*val1;
	
 }
 System.out.println(acum"\t");
	
	



=======
	public static void xerox() {
		System.out.println("Digite quanto xero queira fazer:");
		//multiplicar pelo valor que ele colocou...
	}
}
>>>>>>> a3e24398a969300be58f10355e6834cf73ddc98c
