package visao;

import java.util.Scanner;

import controle.ProcessPlanilha;

public class Tela {
	public static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {
		
		ProcessPlanilha.carregar();
		 
		    int menu = 0;
		    while(menu != 5) {
			System.out.println("1 - Soma\n2 - multiplica��o\n3 - subtra��o\n4 - Divis�o\n5 - Sair");
			menu = scan.nextInt();
			ProcessPlanilha.saida(menu);
		    }
	}
}
