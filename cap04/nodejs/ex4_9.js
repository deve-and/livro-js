/* Elaborar um programa que leia um número que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja uma ceneta, exiba uma mensagem */

const prompt = require('prompt-sync')()
const numero = Number(prompt("Informe uma centena para inverte-la: "))
const unid = numero % 10
const cent = Math.floor(numero / 100)
const deze = Math.floor(numero / 10) % 10
const invertido = (unid * 100) + (deze * 10) + cent;

if (numero < 100 || numero > 999) {
    console.log(`Valor informado não é uma centena!`)
    return
} else {
    console.log(`O número: ${numero} inverto é: ${invertido}`)
}