/* Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto. Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linha, conforme o exemplo de execução do programa demonstrado a seguir:
    Produto: Suco Natural de Uva
    Nº de Etiquetas: 
    Suco Natural de Uva     Suco Natural de Uva
    Suco Natural de Uva     Suco Natural de Uva
    Suco Natural de Uva     Suco Natural de Uva
    Suco Natural de Uva*/

    const prompt = require('prompt-sync')()
    const produto = prompt('Produto: ')
    const numEtiqueta = Number(prompt('Nº de Etiquetas: '))

    for (let i = 1; i <= numEtiqueta / 2; i++){
        console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
    } 

    if (numEtiqueta % 2 != 0) {
        console.log(produto)
    }