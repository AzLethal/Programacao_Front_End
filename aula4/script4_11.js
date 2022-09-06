let a,b,res;
a = 9;
b = 10;
res = (a<b);//true
document.write(`a = ${a} , b = ${b} <br>`);// a = 9 , b = 10
document.write(`a < b : ${(a<b)} <br>`);//a < b : true
document.write(`!( a < b) : ${!(a<b)}<br>`);//!(a < b) : false
document.write("res : "+typeof(res));// res : boolean