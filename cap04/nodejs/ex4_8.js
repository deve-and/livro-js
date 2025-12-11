/* Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como respsosta o número máximo de que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condoções:
    a) cada parcela deve ser de no mínimo, R$ 20,00;
    b) o número máximo de parcelas permitindo é 6 */

const prompt = require("prompt-sync")()
const compra = Number(prompt("Total da compra: R$ "))

const minParcelas = Math.floor(compra / 20) // calcula o máximo de de parcelas pela condição de ser valor minimo de 20 reais
const numParcelas = Math.min(minParcelas, 6) // quantidade de parcelas
const valorParcelas = (compra / minParcelas).toFixed(2)

console.log(`Valor da Compra R$: ${compra.toFixed(2)}`)
console.log(`Pode pagar em ${numParcelas}x de R$: ${valorParcelas}`)
