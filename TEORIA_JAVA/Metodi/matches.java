package Metodi;

public class matches {

    /*
     * metodo dell'oggetto String che consente di verificare se una stringa
     * corrisponde ad un'espressione regolare (simile a import re su python)
     * Questo metodo restituisce un valore booleano che indica se la stringa
     * corrisponde all'espressione regolare o meno.
     * 
     * return true or false
     */

    public static void main(String[] args) {

        // esempio
        String str = "12345";
        if (str.matches("\\d+")) {
            System.out.println("La stringa contiene solo cifre numeriche.");
        } else {
            System.out.println("La stringa contiene caratteri non numerici.");
        }

        /*
         * \d qualisiasi cifra numerica
         * "\w": corrisponde a qualsiasi carattere alfanumerico, ovvero una cifra
         * numerica, una lettera maiuscola o minuscola o il carattere underscore (_).
         * "\s": corrisponde a qualsiasi carattere di spaziatura, come lo spazio, il
         * tabulatore, il ritorno a capo, ecc.
         * "\D": corrisponde a qualsiasi carattere non numerico.
         * "\W": corrisponde a qualsiasi carattere non alfanumerico.
         * "\S": corrisponde a qualsiasi carattere non di spaziatura.
         * ".": corrisponde a qualsiasi carattere.
         * 
         * {} le parentesi graffe indicano la quantita di numeri tipo \d{3} corrisponde
         * a 3 cifre (di qualisis numero)
         * [aeioun] qualsiasi vocale o cosi via
         */

    }

}
