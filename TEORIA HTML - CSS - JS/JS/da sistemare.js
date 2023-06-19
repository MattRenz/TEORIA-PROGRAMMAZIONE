
// Funzioni di callback


// function saluta (nome) {
//     console.log("Ciao" + nome);
// }

// function chiediNome(callback) {

//     let nome = prompt("Come ti chiami?: ");

//     callback(nome);
// }

// chiediNome(saluta);


function somma (a, b){
    return a + b;
}

function stampa(x){
    console.log(x)
}

stampa(somma(3,4));


// Array

let array = [20, 43, 5, 9]

console.log(array[1]) // puntare a un elemento specifico dell'arrays

let x = array.length // lunghezza array (4)

array.push(56) // aggiunge eleemnto in fondo
console.log(array)

array.shift() // estrae un valore
console.log(array)


array.sort() 
console.log(array)

//_--------------------------------------

// iterare l'elementi di un array forEach

array.forEach(element => {
    
    console.log(element)

});


// Metodo for Each

    // let numeri = [1,2,3,4];

    // array.forEach(n, 1, arr  => {
        
    //     arr[i] = n + 1

    // });

    // console.log(numeri) // [2,3,4,5]

//_--------------------------------------

// Metodo map

let numeri_2 = [1,2,3,4];


let quadrati = numeri_2.map((item) => {
    return item * item
})

// Array con quadrati
console.log(quadrati)

// Array originale 
console.log(numeri_2)

//_--------------------------------------

// Metodo filter

let numeri_3 = [1,2,3,4];

let pari = numeri_3.filter(item => {

    return item % 2 == 0;
})

// Stampo funzione modificata
console.log(pari)

// Stampo array originale
console.log(numeri_3)

//_--------------------------------------

// Metodo reduce

let numeri_4 = [1,2,3,4];

let somma_ = numeri_4.reduce((acc, n) => {
    
    return acc + n 

}, 0)

console.log(somma_)


// media con reduce

let voti = [6,7,3,5]

let media_voti = voti.reduce((acc, n, i, array) => {
    
    acc = acc + n;

    if (i == array.length - 1){
        return acc / array.length
    } else {
        return acc;
    }


}, 0)

console.log("Voti studente " + voti)
console.log("Media studente " + media_voti)

//_--------------------------------------

// Ogg JavaScript


let perosna = {
    nome: "Mario",
    cognome: "Rossi",
    l_voti: [30,24,27],

}

// Accedere alla proprietà ome dell'ogg usando il punto

console.log(perosna.nome)

// Modificare la proprietà 

perosna['cognome'] = "Bianchi"

// Stampare ogg come json

console.log(perosna)

//_--------------------------------------


// TypeScript



