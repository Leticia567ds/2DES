
// A empressa precisa de um programa que saiba quanto deve descontar
//de seus funcion�rios de INSS e 
//IRRF e tamb�m quanto deve depositar de FGTS.
//"IRRF imposto de renda que desconta quando sobra"Anlisar"
//entrada o nome completo do funcion�rio e seu sal�rio
//1. INSS, 2 IRRF, 3 FGTS e 4 Sair
//, em cada op��o escolhida deve mostrar o nome do funcion�rio
// a porcentagem aplicada e o valor a ser descontado ou recolhido. ao escolher 
//4 Sair, deve sair do la�o principal e mostrar o nome do funcion�rio, o Sal�rio
//Inicial digitado, o quanto foi descontado de INSS, o quanto foi descontado de 
//IRRF, 
//o sal�rio l�quido que o funcion�rio ir� receber e o quanto ser� depositado de 
//FGTS.
//tiliza dados atualizados para fazer os c�lculos, busque na internet


package prova;

import java.util.Scanner;

public class P1 {
	static String name;
	 
       public static Scanner entrada;
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		int salario;
	     
	 
	
		System.out.println("Digite seu  nome e sobrenome");
		 name = entrada.nextLine();
		System.out.println("Digite seu sal�rio");
		 salario = entrada.nextInt();
		
		
		int opcao = 0;
		while (opcao != 3) {
			System.out.println("1-INSS");
			System.out.println("2-IRRF");
			System.out.println("3-FGTS");
			System.out.println("4-Sair");
			opcao = entrada.nextInt();
			switch(opcao) {
			case 1:
				ex1();
				break;
			}	
			 
		}

	}


  public static void ex1() {
	  Scanner entrada = new Scanner(System.in);
		double salario, desconto;
		float porcentagem;
		System.out.print("Digite o seu sal�rio: ");
		salario = entrada.nextDouble();
		if(salario < 1.212) { 
	     porcentagem = 9f;
		}else {
			porcentagem = 7.5f;
			} if(salario < 2427.35) {
			porcentagem = 12f;
		
		} if(salario < 3641.03) {
					porcentagem = 14f;
		}if(salario > 7087.22) {
			porcentagem = 0f;	
		}if(porcentagem == 0f) {
			desconto = 992.21;
		}
		
		desconto = salario * porcentagem / 100;	
		System.out.printf("A al�quota aplicada � %.0f%% \n",porcentagem);
		System.out.printf("O desconto de INSS � %.2f\n",desconto);
		System.out.printf("Voc� vai receber %.2f\n",salario  - desconto);
  }
	   

 public void ex2() {
	  Scanner entrada = new Scanner(System.in);
	  double resultadoINSS,sal,desconto;
	  float porce;
	  System.out.println("Digite seu salario");
	   sal = entrada.nextInt();
		if(sal <  1903.98) { 
			porce = 0f;	
		}if(sal  < 2.826) {
			porce = 7.5f;
		
		} if(sal  < 3.751) {
			porce= 15f;
			}if(sal< 4.664){
				porce= 22.5f;
			}if(sal > 4.664) {
				porce = 27.5f;
			} if(porce == 0f) 
			  desconto = 00.00;
			
  desconto = sal * porce / 100;	
  
	System.out.printf("A al�quota aplicada � %.0f%% \n",porce);
	System.out.printf("O desconto de IRRF � %.2f\n",desconto);
	System.out.printf("Voc� vai receber %.2f\n",sal  - desconto);
}

 

 
}
 
  