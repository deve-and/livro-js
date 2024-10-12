const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const produto = frm.inProduto.value
  const preco = Number(frm.inPreco.value)
  const promocao = Math.floor(preco * 2)

  resp1.innerText = `Promoção de ${produto}`
  resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`
})