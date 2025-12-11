/* Elaborar um programa leia um número. Informe se ele é par ou ímpar. Faça com o if... else... tradicional e, após, tente criar a condição com o operador ternário. */

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    // if (numero % 2 == 0){
    //     resp.innerText = `O número: ${numero} é Par!`
    // } else {
    //     resp.innerText = `O número: ${numero} é Ímpar`
    // }

    resp.innerText = resposta = numero % 2 == 0 ? `${numero} é Par!` : `${numero} é Ímpar!`
})