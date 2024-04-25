// const quantidadeProdutos = {
//     'Hortifruti': 0,
//     'Laticínios': 0,
//     'Carnes': 0,
//     'Peixes': 0,
//     'Aves': 0
// };

// function iniciarCompra() {
//     let continuarCompra = true;

//     while (continuarCompra) {
//         const opcao = parseInt(prompt(
//             "Selecione o produto que deseja comprar:\n" +
//             "(1) Hortifruti\n" +
//             "(2) Laticínios\n" +
//             "(3) Carnes\n" +
//             "(4) Peixes\n" +
//             "(5) Aves\n" +
//             "(6) Fechar pedido"
//         ));

//         switch (opcao) {
//             case 1:
//             case 2:
//             case 3:
//             case 4:
//             case 5:
//                 const produto = Object.keys(quantidadeProdutos)[opcao - 1];
//                 const quantidade = parseInt(prompt(`Quantos itens de ${produto} deseja comprar?`));
//                 quantidadeProdutos[produto] += quantidade;
//                 break;
//             case 6:
//                 continuarCompra = false;
//                 break;
//             default:
//                 alert("Opção inválida. Por favor, escolha uma opção válida.");
//         }
//     }

//     imprimirProdutoMaiorQuantidade();
// }

// function imprimirProdutoMaiorQuantidade() {
//     let maiorProduto = '';
//     let maiorQuantidade = 0;
    
//     for (const produto in quantidadeProdutos) {
//         if (quantidadeProdutos[produto] > maiorQuantidade) {
//             maiorProduto = produto;
//             maiorQuantidade = quantidadeProdutos[produto];
//         }
//     }
    
//     alert(`O produto com maior quantidade é: ${maiorProduto}, com ${maiorQuantidade} unidades.`);
// }


// // Iniciar o processo de compra
// iniciarCompra()


let quantidadeHortifruti = 0;
let quantidadeLaticinios = 0;
let quantidadeCarnes = 0;
let quantidadePeixes = 0;
let quantidadeAves = 0;

function iniciarCompra() {
    let continuarCompra = true;

    while (continuarCompra) {
        const opcao = parseInt(prompt(
            "Selecione o produto que deseja comprar:\n" +
            "(1) Hortifruti\n" +
            "(2) Laticínios\n" +
            "(3) Carnes\n" +
            "(4) Peixes\n" +
            "(5) Aves\n" +
            "(6) Fechar pedido"
        ));

        switch (opcao) {
            case 1:
                quantidadeHortifruti += parseInt(prompt("Quantos itens de Hortifruti deseja comprar?"));
                break;
            case 2:
                quantidadeLaticinios += parseInt(prompt("Quantos itens de Laticínios deseja comprar?"));
                break;
            case 3:
                quantidadeCarnes += parseInt(prompt("Quantos itens de Carnes deseja comprar?"));
                break;
            case 4:
                quantidadePeixes += parseInt(prompt("Quantos itens de Peixes deseja comprar?"));
                break;
            case 5:
                quantidadeAves += parseInt(prompt("Quantos itens de Aves deseja comprar?"));
                break;
            case 6:
                continuarCompra = false;
                break;
            default:
                alert("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }

}
iniciarCompra();


function imprimirProdutoMaiorQuantidade() {
    let maiorProduto = '';
    let maiorQuantidade = 0;

    if (quantidadeHortifruti > maiorQuantidade) {
        maiorProduto = 'Hortifruti';
        maiorQuantidade = quantidadeHortifruti;
    }
    if (quantidadeLaticinios > maiorQuantidade) {
        maiorProduto = 'Laticínios';
        maiorQuantidade = quantidadeLaticinios;
    }
    if (quantidadeCarnes > maiorQuantidade) {
        maiorProduto = 'Carnes';
        maiorQuantidade = quantidadeCarnes;
    }
    if (quantidadePeixes > maiorQuantidade) {
        maiorProduto = 'Peixes';
        maiorQuantidade = quantidadePeixes;
    }
    if (quantidadeAves > maiorQuantidade) {
        maiorProduto = 'Aves';
        maiorQuantidade = quantidadeAves;
    }

    alert(`O produto com maior quantidade é: ${maiorProduto}, com ${maiorQuantidade} unidades.`);
}

imprimirProdutoMaiorQuantidade();
