// leia o nome de um vendedor, o seu sal�rio fixo e o total de vendas 
//efetuadas por ele no m�s (em dinheiro)
// vendedor ganha 15% de comiss�o 
//otal a receber no final do m�s, com duas casas decimais.
//Entrada
//primeiro nome do vendedor e 2 valores de dupla precis�o (double) com duas casas decimais, representando o sal�rio fixo do vendedor e montante total
//das vendas efetuadas por este vendedor, respectivamente.
package e.ex;

import java.util.Scanner;

public class Exercicio1 {
  public static Scanner entrada;
   public String nome;
	public static void main(String[] args) {
	 entrada = new Scanner(System.in);
	System.out.println("Digite seu nome:)");
	String nome = entrada.next("\n");
	double slrfixo, totalVenda,Total;
	System.out.println("Informe o seu salario fixo-.-");
	slrfixo = entrada.nextDouble();
	
   System.out.println("Informe o total das vendas efetuadas por voc�:)");
   totalVenda = entrada.nextDouble();
   //Processamento
   Total = slrfixo +  (totalVenda * 15)/100;
   System.out.printf("TOTAL = R$ %.2f", Total);
	}

}
