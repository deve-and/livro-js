const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const preco = Number(frm.inPreco.value)
  const tempo = Number(frm.inTempo.value)
  const valor = Math.ceil(tempo / 15) * preco

  resp.innerText = `Valor a Pagar R$: ${valor.toFixed(2)}`
})