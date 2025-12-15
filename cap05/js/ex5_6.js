const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    let temDivisor = 0 // Declara e inicia a variável tipo Flag

    for (let i = 2; i <= numero / 2; i++) { // percorre os números
        if (numero % i == 0){ // verifica i é divisor de numero
            temDivisor = 1 // muda o flag
            break // sai da repetição
        }
    }
    if (numero > 1 && !temDivisor) { // se número é maior que 1 e não tem divisor
        resp.innerText = `${numero} É primo`
    } else {
        resp.innerText = `${numero} Não é primo`
    }
})