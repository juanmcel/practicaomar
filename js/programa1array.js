// JavaScript Document
//programa1
function numeros(){
	var almacen= new Array();
	for(var i=0;i<10;i++){
	var num= 0;
		num=parseInt(prompt("Dime el numero "+" "+i));
		
		almacen.push(num);
		
		
	}
var xy=almacen.sort(function(a, b){return a - b});
	document.write(xy);
	
}
numeros();