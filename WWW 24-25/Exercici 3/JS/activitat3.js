// el programa tiene que elegir una palabra para ser adivinada

//  array de palabra 

const LlistaParaules = ["latigo", "sandia", "pollo", "chocolate", "gas"];

//  como elegir un elemento aleatorio de un vector (después)

let ParaulaSecreta;

//  array con lineas de la palabra a adivinar (tantas lineas como letras)

// let ParaulaGuions = [];


const ArrayParaulaGuions = [];

let ArrayParaulaSecreta ;

// numero de fallos y aciertos
let NumErrades = 0;
let NumEncerts = 0;

//  lista de letras ya dichas

const LlistatLletres = [];

function Inicialitzar() {
    // selecció de la paraula random

    let posicion = Math.floor(Math.random() * LlistaParaules.length);

    ParaulaSecreta = LlistaParaules[posicion];

    ArrayParaulaSecreta = Array.from(ParaulaSecreta);
    document.getElementById("paraula_secreta").innerHTML = ParaulaSecreta;


    //*** Creem la paraula ArrayParaulaoculta*/

    let num_guions = ArrayParaulaSecreta.length;
    for (let i = 0; i < num_guions; i++) {
        ArrayParaulaGuions[i] = '_';

    }

    //la mostrem per pantalla
    for (let i = 0; i < num_guions; i++) {
        document.getElementById("paraula").innerHTML +=
            `${ArrayParaulaGuions[i]} `;

    }
}

function Enviar() {
    let encert = false;

    let lletra_escrita = document.getElementById("letra").value;

    //  I AL ARRAY LLISTAT LLETERES 
    LlistatLletres.push(lletra_escrita);
    document.getElementById("lista_letras").innerHTML += `${lletra_escrita} <br>`;
    document.getElementById("formulario").reset();

    for (let i = 0; i < ArrayParaulaSecreta.length; i++) {

        if (ArrayParaulaSecreta[i] == lletra_escrita) {
            ArrayParaulaGuions[i] = lletra_escrita;
            encert = true;
            NumEncerts++;
        }


    }
    // INCREMENTA EL NÚMERO DE FALLOS
    //!encert > encert== false
    if (!encert) {
        NumErrades++;
    }
    document.getElementById("paraula").innerHTML = "";


    for (let i = 0; i < ArrayParaulaSecreta.length; i++) {
        document.getElementById("paraula").innerHTML += `${ArrayParaulaGuions[i]} `;
    }

    document.getElementById("letra").focus();

    Dibuixar(NumErrades, NumEncerts)
}

function Dibuixar (errades, encerts){
    let imatge = document.getElementById("imagen");


    switch (errades) {
        case 0: 
            imatge.src= "./IMG/A0.png";
        break;

        case 1:
            imatge.src= "./IMG/A1.png";
            break;
        
        case 2:
            imatge.src= "./IMG/A2.png";
            break;
        
        case 3:
            imatge.src= "./IMG/A3.png";
            break;

        case 4:
            imatge.src= "./IMG/A4.png";
            break;

        case 5:
            imatge.src= "./IMG/A5.png";
            break;
        
        case 6:
            imatge.src= "./IMG/A6.png";
            break;
    }

if(NumEncerts == ArrayParaulaSecreta.length){
    document.getElementById("fraseencert").innerHTML += `has guanyat! la resposta t'ha costat ${LlistatLletres.length} lletres`
    document.getElementById("ganador").style.display="block"
}

if(NumErrades == 6){
    document.getElementById("fraseerrada").innerHTML += `has perdut! la resposta era ${ParaulaSecreta}`
    document.getElementById("perdedor").style.display="block"
}




}