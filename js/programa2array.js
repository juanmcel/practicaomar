// JavaScript Document
//programa2
function numeros2(){
	var almacen= new Array();
	for(var i=0;i<5;i++){
	var num= 0;
		num=parseInt(prompt("Dime el numero "+" "+i));
		
		almacen.push(num*2);
		
		
	}
var xy=almacen.sort(function(a, b){return a - b});
	document.write(xy);
}
numeros2();