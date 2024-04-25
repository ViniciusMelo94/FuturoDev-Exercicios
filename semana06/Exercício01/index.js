function parOuImpar(numero) { 

    return new Promise((resolve, reject) => {
    if (numero % 2 == 0){
        resolve("Número validado é par.");
    }else{
        reject("Error: número informado é impar.");
    }
    });

}

parOuImpar(10)
.then(mensagem => {
    document.write(mensagem);
})
.catch(error => {
    document.write(error)
})