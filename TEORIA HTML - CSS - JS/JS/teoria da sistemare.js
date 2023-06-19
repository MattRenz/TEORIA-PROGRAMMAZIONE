
// https://nodejs.org dwonload

// sudo apt install nodejs

//  terminale su file python node script.js

console.log() // Stampa a video


// VARIABILI

    /* 

    var Tipo Generico

    const COnstante, rimane quella per sempre

    let Modificabile, circoscritta

    _ $ variabili di sistemas o globali 


    */

    var numero = 10;

    let saluto = "ciao";

    const flag = true;

    console.log(numero + saluto)
    console.log(saluto)
    console.log(flag)


// TIPI DI DATI

    /* 

    string = sequenza di caratteri

    number = numeri 

    boolean = true false

    null = azzenza di un valore 

    undefield = non esiste la varaibile, non inazializzata

    */

   
    
// FUNZIONE NUMBER

    Number() // Funzione: converte stringa in numero prima di un operazione

    let s = "10"

    console.log(Number(s) + 3);


// IF ELSE SWITCH

    let eta = 18;

    if (eta >= 18){
        console.log("sei maggiorenne")
    } else {
        console.log("Sei minorenne")
    }

        // oppure 

        console.log(eta >= 18 ? 'sei maggiorenne' : 'sei minorenne')

        //         condizioene    caso true         caso false


    switch (eta){

        case 18: 
            console.log("Maggiorenne")
            break;

        case 17: 
            console.log("Minorenne")
            break;

        case 50: 
            console.log("Hai 50 anni")
            break;

        default: 
            console.log("Eta non conosciuta")

    }

    
    /* 
        // or logico 

        && and logico 

        ! not logico 
    */
     


// CICLO JAVASCRIPT 

    for (let i = 1; i <= 10; i++){
        console.log(i)  // stampa i numeri da 1 a 10
    }


    let i = 0

    while(true){
        i++;
        console.log(i) // stampa numeri da 1 a 5

        if (i == 5){
            break;
        }
    }

    
// FUNZIONI JAVASCRPT

    function FunzioneSomma(a, b){

        return a + b;
    }

    console.log(FunzioneSomma(2, 5)) // output: 7

    let x = FunzioneSomma(2,2)

    console.log(x + 4) //x = 4 output: 8


// ARROW FUNCTION

    let cubo = (x) => {
        return x * x * x;
    }

    console.log(cubo(3));

        // oppure:
        let somma = (a, b) => a + b;
        
        console.log(somma(5,5))


    // this

    let divisione = (a,b) => {

        this.a = a;
        this.b = b;

        return a / b;
    }  
    console.log(divisione(10,5));
    

// FUNZIONE ALLERT

