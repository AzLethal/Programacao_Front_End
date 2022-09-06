let a,b,c,d;
a = 50;
b = 120;
c = 200;
document.write(`a = ${a}, b = ${b}, c = ${c} <br>`);// a = 50, b = 120, c = 200
d=(a<=b) && (a>=c);//Compara os dois parenteses, se ambos retornarem true, então 'd = true', se não, 'd = false'
document.write("(a<=b) && (a>=c) = "+d); //(a<=b) && (a>=c) = false