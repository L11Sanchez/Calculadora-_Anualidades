var formulario = document.forms.form_TiempoAnu_Adelantadas
var resultado = document.getElementById("res-TiempoAnuAdelantadas")

formulario.monto.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let r = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = ((Math.log10((s*i)+r))-Math.log10(r))/(Math.log10(1+i))


    resultado.innerHTML = total.toFixed(2)
}