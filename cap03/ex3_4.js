/* Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas) */

const prompt = require("prompt-sync")()
const pesoRacao = Number(prompt("Peso (kg): ")) // Lê os dados de entrada
const consumoDiario = Number(prompt("Consumo diário (g): "))

const pesoGrama = pesoRacao * 1000 // Converte Kilo para grama
const duraDias = Math.floor(pesoGrama / consumoDiario) // Essa é a duração em dias.
const sobra = pesoGrama % consumoDiario // Recebe a sobra das gramas restantes da divisão

console.log(`Duração: ${duraDias} dias`)
console.log(`Sora: ${sobra}gr`)
