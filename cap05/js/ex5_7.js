const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let estrelas = "" // variável que irá concatenar as estrelas e traços

    // Cria um laço de repetição de 1 até número
    for (let i = 1; i <= numero; i++) {
         if(i % 2 == 1) {
            estrelas = estrelas + "*" // na posição impar do i: *
         } else {
            estrelas = estrelas + "-" // na posição par
         }
    }
    resp.innerText = estrelas
})