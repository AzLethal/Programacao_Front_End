
function recebeNumero() {
    let tipo = '';
    let decimal = parseInt(prompt("Digite o número decimal a ser convertido!"));
    let conversor = prompt("Digite o qual tipo será a conversão, bin ou Octal?")
    if(typeof(decimal) !== 'number'){
        prompt("Digite um número, não são aceitas palavras")
    }
    if(conversor === 'bin') {
        conversor = 2;
        tipo = 'binário'
    } else if (conversor === 'octal') {
        conversor = 8;
        tipo = 'octal'
    } else {
        prompt("Parametro não aceito, digite 'bin' para binário ou 'octal' pra octal!!");
    }
    document.write(`A seguir o número decimal ${decimal} convertido em ${tipo}: ${converteDecimal(decimal, conversor)}`);
    return converteDecimal(decimal, conversor);
}
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
    res = res.split("");
    res.reverse().join();
    return res.toString().replace(/,/g, '');
}
recebeNumero();