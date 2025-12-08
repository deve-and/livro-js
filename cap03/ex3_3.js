/* Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadiênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.
*/

const prompt = require("prompt-sync")()
const salario = Number(prompt("Salário: R$ ")) // Lê os dados de entrada
const tempoDeCasa = Number(prompt("Tempo (anos): "))
const quadrienos = Math.floor(tempoDeCasa / 4 ) // Arredonda para baixo, caso tenha 5 ou 7 anos por exemplo irá para 4
const acrescimo = (salario * quadrienos) / 100 // o acrescimo no salário
console.log(`Quadriénios: ${quadrienos}`)
console.log(`Salário Final: R$ ${(salario + acrescimo).toFixed(2)}`)