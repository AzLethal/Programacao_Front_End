//valida se o que foi digitado é número ou não.
function validaNumero(numero) {
    while(isNaN(numero)) {
        numero = parseInt(prompt("Apenas são aceitos números, favor digitar um número!!"));
    }
    return numero;
}

//valida o tipo de conversão escolhida - 'bin' ou 'octal'
function validaTipo(conversor) {
    //caso escolhido algo que não seja 'bin' ou 'octal', será apresentado a mensagem abaixo, pedindo para digitar 'bin' ou 'octal'
    while(conversor !== 'bin' && conversor !== 'octal') {
        conversor = prompt("Digite 'bin' para conversão binária ou 'octal' para conversão octal?")
    }
    if(conversor === 'bin') {
        conversor = 2;
    } else if (conversor === 'octal') {
        conversor = 8;
    }
    console.log(conversor);
    return conversor;
}

//responsável por receber o número digitado
function recebeNumero() {
    let tipo = '';
    let decimal = parseInt(prompt("Digite um número!"));
    decimal = validaNumero(decimal);
    let conversor = prompt("Digite qual será o tipo de conversão, 'bin' ou 'octal'?");
    conversor = validaTipo(conversor, tipo);
    if(conversor === 2) {
        tipo = 'binário';
    } else {
        tipo = 'octal';
    }
    document.write(`A seguir o número decimal ${decimal} convertido em ${tipo}: ${converteDecimal(decimal, conversor)}`);
    return converteDecimal(decimal, conversor);
}

//faz a divisão do decimal digitado pelo conversor
function converteDecimal(decimal, conversor) {
    /*Servirá para conversão de decimal para binário ou octal,
    no entanto... para hexa precisa ser feito outra função*/
    let res = '';
    let quo = '';
    while(parseInt(~~decimal/conversor) !== 0) {
        console.log(`decimal = ${decimal}`);
        quo = (parseInt(~~(decimal/conversor)));
        console.log(`quociente = ${quo}`);
        res += parseInt(decimal % conversor);
        console.log(`resultado = ${res}`);
        decimal = parseInt(~~(decimal/conversor));
        console.log(`decimal = ${decimal} - Finalizado nessa linha`);
        console.log("");
    }
    res += quo;
    res = res.split(""); //espalha o resultado
    res.reverse().join();//inverte a ordem e retorna um array
    return res.toString().replace(/,/g, ''); //retorna o resultado transformando em string e retira as virgulas
}
recebeNumero();