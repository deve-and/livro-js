/* Elaborar um programa que leia trêes lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não poder ser maior que a soma dos outros dois. Caso possam forma um triângulo, exiba também qual o tipo de triângulo: 
- Equilátero (3 ladoos iguais) 
- Isósceles (2 lados iguais) 
- Escaleno (3 lados diferentes).*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if((ladoA >= ladoB + ladoC) || (ladoB >= ladoA + ladoC) || (ladoC >= ladoA + ladoB)) {
        alert('Não é possível formar um triângulo!')
        return
    } else {
        if(ladoA === ladoB && ladoA === ladoC) {
            resp1.innerText = 'Lados podem formar um triângulo.'
            resp2.innerText = 'Tipo: Equilátero'
        } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
            resp1.innerText = 'Lados podem formar um triângulo.'
            resp2.innerText = 'Tipo: Isósceles'
        } else {
            resp1.innerText = 'Lados podem formar um triângulo.'
            resp2.innerText = 'Tipo: Escaleno'
        }
    }
})