/* A entrada paa um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem dereito a levar um peixe. Peixes extras custam 12,00. Elabore  um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. Informe o valor a pagar. */

const prompt = require("prompt-sync")()
const pessoas = Number(prompt("N° de pessas: "))
const peixes = Number(prompt("Nº de peixes: "))
let pagar

if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)    