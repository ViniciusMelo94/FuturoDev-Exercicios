let numero = 4;
let resultado = parOuImpar(numero);

function parOuImpar(numero){
    if(numero % 2 == 0){
        return "Par";
    } else {
        return "Impar";
    } 
}

console.log(`O número ${numero} é ${resultado}.`);