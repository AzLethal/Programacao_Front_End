let a,b;
a = prompt("Digite o nome");
b = prompt("Digite o sobrenome");
document.write (`${a} ${b}`);//resultado: a b
b += " ";// 'b' concatena um ' '(espaço vazio) ao valor digitado 
b += a;// 'b' concatena o valor anteriormente atribuido a 'a' pelo prompt
document.write ("<br>"+ b);//resultado: b a