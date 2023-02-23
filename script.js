const h1 = document.querySelector('h1')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const boton = document.getElementById('btnCalcular')
const resultado = document.getElementById('result')

boton.addEventListener('click', calculacion)

function calculacion (e) {
    e.preventDefault()
    resultado.innerHTML = 'Resultado:' + (+(input1.value) + +(input2.value)) 
}