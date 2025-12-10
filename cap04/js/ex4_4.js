/* Sabendo que o fuso horário da França em relação ao Brasil é de +5 horas (no horário de verão na França), elaborar um programa que leia a hora no Brasil e inform a hora na França.
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }

    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`

})