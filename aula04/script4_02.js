let a,b;
a = prompt("Digite um número");
a = parseInt(a);//transforma em inteiro
b = parseInt(prompt("Digite outro número"));
document.write (`soma: ${(a+b)} <br>`);//template string
document.write ("subtração: "+ (a-b));