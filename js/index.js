'user strict'

const display = document.querySelector('#display');
const numeros = document.querySelectorAll('[id^=tecla]');
const operadores = document.querySelectorAll('[id^=operador]');

let n1 = ''; // Valor 1
let n2 = ''; // Valor 2
let op; // Operador

numeros.forEach((numero) => {
    numero.addEventListener('click', (event) => {
        if(n1.length < 3) {
            n1 += String(event.target.textContent);
        } else if(n1.length == 3 || n1.length == 6) {
            n1 += '.';
            n1 += String(event.target.textContent);
        } else {
            n1 += String(event.target.textContent);
        }
        setDisplay(n1);
    });
});

function setDisplay(valor) {
    display.innerHTML = Number(valor);
}
