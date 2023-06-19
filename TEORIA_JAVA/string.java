
public class string {
    public static void main(String[] args) {
        // Raccolta di caratteri chiusi tra virgolette

        String parola = "Hello";

        // Una stringa in realtà è un metodo che contiene metodi

        // mlengt() mostra la lunghezza di una stringa
        int lenStr = parola.length();
        System.out.println("La parola " + parola + " è lunga " + lenStr);

        // toUpperCase() rende tutto maiuscolo
        System.out.println(parola.toUpperCase());

        // toLowerCase() rende tutto minuscolo
        System.out.println(parola.toLowerCase());

        // indexOf()
        /*
         * restituisce l'indice (la posizione) della prima occorrenza
         * di un testo (spazi inclusi)
         */

        String frase = "Ciao sto studiando Java ";
        System.out.println(frase.indexOf("Java"));

        // equals() Confronta due striinghe per verificare se sono uguali
        System.out.println(parola.equals("Hello")); // true

        // trim() Rimuove spazi bianchi all'inizio e alla fine della stringa
        System.out.println(parola.trim());

        // charAt Ottenere il carattere in una specifica posizione
        System.out.println(parola.charAt(1));

        // .contains() controlla se una stringa contiene un carattere specifico
        System.out.println(parola.contains("Hel")); // ture
        System.out.println(parola.contains("e")); // true
        System.out.println(parola.contains("z")); // false

        // valueOf() restiuisce il valore primitivo di una stringa

        // .substring() estrae i caratteri compresi tra due indici (posizioni)
        System.out.println(parola.substring(0, 2));

        /*
         * \n: rappresenta un carattere di nuova linea.
         * \t: rappresenta un carattere di tabulazione(tab).
         * \b: rappresenta un carattere di retrocesso (backspace).
         * \r: rappresenta un carattere di ritorno a capo (carriage return).
         * \f: rappresenta un carattere di avanzamento pagina (form feed).
         */
    }
}
