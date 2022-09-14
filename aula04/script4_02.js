let a, b, c, d, e, f;
a = prompt("Digite um número");
a = parseInt(a);//transforma em inteiro
b = parseInt(prompt("Digite outro número"));
c = a * b;
d = a / b;
e = a % b;
f = a ** b;

document.write (`soma: ${(a + b)} <br>`);//template string
document.write ("subtração: "+ (a - b) + "<br>");
document.write (`A multiplicação de ${a} por ${b} é ${c}<br>`);
document.write (`A divisão de ${a} por ${b} é ${d}<br>`);
document.write (`O resto de ${a} por ${b} é ${e}<br>`);
document.write (`A potenciação de ${a} por ${b} é ${f}<br>`);

