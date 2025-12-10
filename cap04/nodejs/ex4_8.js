/* Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como respsosta o número máximo de que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condoções:
    a) cada parcela deve ser de no mínimo, R$ 20,00;
    b) o número máximo de parcelas permitindo é 6 */

const prompt = require("prompt-sync")()
const compra = Number(prompt("Total da compra: R$ "))

const maxParcelas = Math.floor(compra / 20)
const numParcelas = Math.min(maxParcelas, 6)
