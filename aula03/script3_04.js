let dia = 30;
let mes = "Agosto";
let ano = 2022;
let dataCompleta = `${dia} de ${mes} de ${ano}`;
let botaoResultado = document.querySelector('.button');
let dataDoc = document.querySelector('.data');
console.log(botaoResultado);

botaoResultado.addEventListener('click', () => {
    dataDoc.innerHTML = `Data: ${dataCompleta}`;
})
