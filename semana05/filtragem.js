const numeros = [1, 2, 3, 4, 5]

let pares = numeros.filter(n => {
    return n % 2 == 0;
})

console.log(pares)