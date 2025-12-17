/* Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente desaja parcelar esse valor (em boletos ou carnê). Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos, ou seja, centavos apenas na última parcela. Informe como resposta o valor de cada parcela considerando essa situação */

const prompt = require('prompt-sync')()
const valor = Number(prompt('Valor R$: '))
const numParcelas = Number(prompt('Nº de Parcelas: '))

const valorParcela = Math.floor(valor / numParcelas)
const valorFinal = valorParcela + (valor % numParcelas)

for (let i = 1; i < numParcelas; i++) {
    console.log(`${i}º de Parcela: R$ ${numParcelas}`)
}
console.log(`${numParcelas}º de Parcela: R$ ${valorFinal.toFixed(2)}\n`)
