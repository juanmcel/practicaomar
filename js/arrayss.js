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
//numeros();

//programa 2
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
//numeros2();


//programa3

function numeros3(){
	var almacen= new Array();
	for(var i=1;i<=100;i++){
	if(i%2==0){
		almacen.push(i);
		
	}
		
		
		
		
		
	}
var xy=almacen.reverse();
	document.write(xy);
	
	
}


numeros3();


























