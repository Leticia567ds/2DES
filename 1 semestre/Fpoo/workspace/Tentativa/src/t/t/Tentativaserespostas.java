//Escreva um programa que leia o n�mero de um funcion�rio,
//seu n�mero de horas trabalhadas, 
//o valor que recebe por hora e calcula o sal�rio desse funcion�rio.


package t.t;

import java.util.Scanner;

public class Tentativaserespostas {
       public static Scanner entrada;
	public static void main(String[] args) {
		prosal();
	}
	//entrada cont�m 2 n�meros inteiros e 1 n�mero com duas casas decimais,
	//representando o n�mero, quantidade de horas trabalhadas e 
	//o valor que o funcion�rio recebe por hora trabalhada,
	
  public static void prosal() {
	entrada = new Scanner(System.in);
	double qtht, valorporh, Salary;
	 int Number; 
	 System.out.println("Qual � o seu n�mero na empresa");
	 Number = entrada.nextInt();
	System.out.println("Quantas horas voc� trabalhou?");
	 qtht = entrada.nextDouble();
	 System.out.println("Quanto voc� recebe por hora?");
	 valorporh = entrada.nextDouble();
	 
	 //processamento
	 Salary = qtht * valorporh;
	 //Saida
	 System.out.println("Number = "+Number);
	 System.out.printf("Salary = $%.2f",Salary);
	 
	 
  }
}
