var formulario = document.forms.formulario_AmortizacionesRENTA
var resultado = document.getElementById("res-Amortizaciones(RENTA)")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let v = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = ((i*((1+i)**n))/(((1 + i)**n)-1))*v
    
    
    resultado.innerHTML = total.toFixed(2)
}