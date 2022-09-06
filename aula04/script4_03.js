let a,b;
a = parseInt(prompt("Digite um número"));
b = parseInt(prompt("Digite outro número"));
a += b;//soma o valor de 'b' ao 'a'
b -= 5;//subtrai 5 do valor de 'b'
document.write (`a = ${a}<br>`);//template string
document.write ("b = "+ b);