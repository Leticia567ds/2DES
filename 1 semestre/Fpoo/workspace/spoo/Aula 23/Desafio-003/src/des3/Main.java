package des3;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Random;

public class Main {

	public static void main(String[] args) {
		String info = "";
		Random r = new Random();
		for (int i = 0; i < 10; i++) {
			info = info + r.nextInt(100) + "\r\n";
		}
		try {
			FileWriter fw = new FileWriter("entrada.txt", false);
			BufferedWriter bw = new BufferedWriter(fw);

			bw.write(info);

			bw.close();
			fw.close();
		} catch (Exception e) {
			System.out.println();
		}
		ArrayList<Integer> dt = new ArrayList<Integer>();
		try {
			FileReader fr = new FileReader("entrada.txt");
			BufferedReader br = new BufferedReader(fr);
			String linha = " ";
			while ((linha = br.readLine()) != null) {
				dt.add(Integer.parseInt(linha));
			}

			br.close();
			fr.close();
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		dt.sort(null);
		for (Integer i : dt) {
			System.out.println(i);
		}
	}

}
