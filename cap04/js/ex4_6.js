/* Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque. */

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const saque = Number(frm.inValor.value)

    if(saque % 10 != 0) {
        alert('Valor inválido para notas disponíves (R$ 10, 50, 100)')
        frm.inValor.focus()
        return
    }

    const notaCem = Math.floor(saque / 100) // Calcula notas de 100
    let resto = saque % 100 // quanto sobra para pagar

    const notaCinquenta = Math.floor(resto / 50) // calcula notas de 50
    resto = resto % 50 // quanto ainda sobra

    const notasDez = Math.floor(resto / 10) // calcula notas de 10

    if(notaCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notaCem}`
    }

    if(notaCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notaCinquenta}`
    }

    if(notasDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }


})