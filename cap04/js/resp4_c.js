/* Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e troco (se existir), como no exemplo. Se o valor for inferiror ao temo mínimo, exiba a mensagem "Valor Insuficiente". Considerar os valores/tempos da tabela, sendo o máximo 120 é min.
    VALOR R$    |   TEMPO (min)
        1,00    |       30
        1,75    |       60      
        3,00    |       120 
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    if(valor < 1) {
        alert('Valor Insuficiente')
        return
    }

    if (valor > 3) {
        let troco = valor - 3
        let tempo = 120
        
        resp1.innerText = `Tempo: 2 horas (${tempo}min)`
        resp2.innerText = `Troco: ${troco.toFixed(2)}`
    } else if (valor >= 1.75) {
        let troco = valor - 1.75
        let tempo = 60
        
        resp1.innerText = `Tempo: 1 hora (${tempo}min)`
        resp2.innerText = `Troco: ${troco.toFixed(2)}`
    } else {
        let troco = valor - 1
        let tempo = 30
        
        resp1.innerText = `Tempo: ${tempo} min`
        resp2.innerText = `Troco: ${troco.toFixed(2)}`
    }
})
