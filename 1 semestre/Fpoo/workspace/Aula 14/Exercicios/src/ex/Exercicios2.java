package ex;

import java.util.Scanner;

public class Exercicios2 {
	public static Scanner entrada;

	public static void main(String[] args) {

		// Fa�a um programa que l� 10 n�meros inteiros do teclado e armazene em um
		// vetor.
		// Ao final imprima o vetor armazenado nos dois sentidos.
		entrada = new Scanner(System.in);
		int numb[] = new int[10];
		for (int i = 0; i < 10; i++) {

			System.out.print("Digit um n�mero inteiro: ");
			numb[i] = entrada.nextInt();

		}
		for (int i = 0; i < numb.length; i++) {
			
		}

	}
}