
/* *************************** PREGUNTA 1 ********************************* */

const imagen = document.querySelector('.foto')
const borde = getComputedStyle(imagen).border

imagen.addEventListener('click',() => {
    if (imagen.style.border == 'none')
    {
        imagen.style.border =  '2px solid #ff0000'
    }
    else
    {
        imagen.style.border =  'none'
    }
})

/* *************************** PREGUNTA 2 ********************************* */

const cantidad1 = document.querySelector('#uno')
const cantidad2 = document.querySelector('#dos')
const cantidad3 = document.querySelector('#tres')
const btnVerifica = document.querySelector('.btn')
const parrafo = document.querySelector('p')

let cantidad = 0

btnVerifica.addEventListener('click',() => {
    cantidad = Number(cantidad1.value) + Number(cantidad2.value) + Number(cantidad3.value)

    if (cantidad > 10)
    {
        parrafo.innerHTML = "Llevas demasiados stickets"
    }
    else
    {
        parrafo.innerHTML = "Llevas " + cantidad + " stickers"
    }
})

/* *************************** PREGUNTA 3 ********************************* */

const btnIngresar = document.querySelector('.btn_pwd')
const parrafoPwd = document.querySelector('#p_pwd')
const numSelect1 = document.querySelector('#lista1')
const numSelect2 = document.querySelector('#lista2')
const numSelect3 = document.querySelector('#lista3')
let num1 = 0
let num2 = 0
let num3 = 0
let pwd = 0

numSelect1.addEventListener('click', () => {
    num1 = numSelect1.value
})

numSelect2.addEventListener('click', () => {
    num2 = numSelect2.value
})

numSelect3.addEventListener('click', () => {
    num3 = numSelect3.value
})


btnIngresar.addEventListener('click',() => {
    pwd = num1 + num2 + num3

    if (pwd == '911')
    {
        parrafoPwd.innerHTML = "Password 1 correcto"
    }
    else if (pwd == '714')
    {
        parrafoPwd.innerHTML = "Password 2 correcto"
    }
    else
    {
        parrafoPwd.innerHTML = "Password incorrecto"
    }
})