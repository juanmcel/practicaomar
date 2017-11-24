// JavaScript Document
var uno=true;
var dos=false;
//este bloque no se ejecuta porque es falso
if(dos){
	console.log("Hola 5a");
}
//se ejecuta porque es verdadero
if(uno){
	console.log("Hola 5a");
}
//condicionales
//< >, <=, >=, ==, !=,===,!==
var x=20;
var y=30;
var z=40;
// == compara nadamas el valor
//=== compara el valor y el mismo tipo de dato
//combinaciones de operadores logicos
//OR(||),AND(&&),NOT(!);

if((x=== y)|| !(y>x)){
	console.log("se cumple");
}else{
	console.log("no se cumple");
}

if(x==y){
	console.log("se cumple 1");
}else if(x*2==z){
	console.log("se cumple 2");
}else{
	console.log("no se cumple");
}


var result;
var n=80;
if(n>=80){
	console.log("Aprovado");
}else{
	console.log("reprovado");
}

//operador ternario
result = n >= 80  ? "pasado":"remedial";
console.log("resultado"+"  "+result);



// switch case
var v=2;

switch(v){
	case 1:
		console.log("caso1");
		break;
		
		case 2:
		console.log("caso2");
		break;
		
	default:
		console.log("Default");
		break;
}













