// jsnack 1 /////////////////////////
const zucchine = [
    {
        varietà : 'trombetta',
        peso : 700,
        lunghezza : 20 
    },

    {
        varietà : 'napoletana',
        peso : 479,
        lunghezza : 15
    },

    {
        varietà : 'tonda',
        peso : 655,
        lunghezza : 19
    },

    {
        varietà : 'fiorentina',
        peso : 512,
        lunghezza : 13
    },
    
    {
        varietà : 'romanesca',
        peso : 698,
        lunghezza : 24
    },
    
    {
        varietà : 'gialla',
        peso : 762,
        lunghezza : 23
    },
    
    {
        varietà : 'spinosa',
        peso : 390,
        lunghezza : 14
    },
    
    {
        varietà : 'ad alberello',
        peso : 520,
        lunghezza : 17
    },
    
    {
        varietà : 'a buccia chiara',
        peso : 436,
        lunghezza : 15
    },
    
    {
        varietà : 'afrodite',
        peso : 645,
        lunghezza : 21
    },
];
const output1 = document.querySelector('.output1');

const pesoFinaleZucchine = CalcoloPesoZucchine(zucchine);
const pesoFinaleZucchineKg = pesoFinaleZucchine / 1000;

output1.innerHTML = 'Il peso totale delle zucchine è: ' + pesoFinaleZucchine + ' grammi. Ovvero ' + pesoFinaleZucchineKg + ' Kg';


function CalcoloPesoZucchine(array){
    let pesoTotZucchine = 0;
    for(let i = 0; i < array.length; i++){
        pesoTotZucchine += array[i].peso;
    }
    return pesoTotZucchine;
}


// jsnack 2 /////////////////////////
const output2 = document.querySelector('.output2');
const limit = 10;
let zucchineCorte = [];
let zucchineLunghe = [];

for(let i = 0; i < limit ; i++){
    //creo randomicamente i valori delle proprietà
    let lunghezza = Math.ceil(Math.random() * (30 - 8)) + 8;
    let peso = Math.ceil(Math.random() * (800 - 100)) + 300;
    
    //creo l'oggetto
    let zucchina = {
        lunghezza : lunghezza,
        peso : peso
    }

    zucchina.lunghezza >= 15    ? zucchineLunghe.push(zucchina)
                                :  zucchineCorte.push(zucchina)
}

output2.innerHTML = `
    zucchine > 15 --> ${zucchineLunghe.length} <br>
    zucchine < 15 --> ${zucchineCorte.length} <br>
    Il peso totale delle zucchine > 15 è ${calcoloPesoLunghe(zucchineLunghe)} grammi; <br>
    Il peso totale delle zucchine < 15 è ${calcoloPesoLunghe(zucchineCorte)} grammi;
`
console.log(zucchineCorte);
console.log(zucchineLunghe);

function calcoloPesoLunghe(array){
    let pesoTot = 0;
    for(let i = 0; i < array.length; i++){
        pesoTot += array[i].peso;
    }
    return pesoTot;
    
}

// jsnack 3 /////////////////////////
const output3 = document.querySelector('.output3');

function reverseWord(word){

    return word.split('').reverse().join('')
}

const wordResult = reverseWord('domani non avremo esercizi');
output3.innerHTML = wordResult;


// jsnack 4 /////////////////////////
const array1 = ['a', 'b', 'c', 'd'];
const array2 = [1, 2, 3 , 4,];
const arrayFuso = [];
const output4 = document.querySelector('.output4');

const arrayFinale = fusioneArray(array1, array2);
output4.innerHTML = arrayFinale;

function fusioneArray (array1, array2){

    for(let i = 0; i < array1.length; i++){
        arrayFuso.push(array1[i]);
        arrayFuso.push(array2[i]);
    }

    return arrayFuso
}


// jsnack 5 /////////////////////////
const output5 = document.querySelector('.output5');
let a = 6;
let b = 8;
let array = [1,2,3,4,5,6,7,8,9,10];

const outputRange = range(a, b, array);
output5.innerHTML = outputRange;
console.log(range(a, b, array));

function range(a, b, array){

    if(a < b && a >= 0 && b < array.length){
        return array.slice(a, b + 1);
    }else{
        return 'errore'
    }
    
}