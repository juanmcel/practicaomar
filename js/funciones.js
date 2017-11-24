// JavaScript Document


function calificacion(){
	
	var d1 =parseFloat(document.getElementById("aciertos").value);
	var d2 =parseFloat(document.getElementById("cuantos").value);

		
	var formula=d2/d1*10;
	var decimal =formula.toFixed(1);
	
	document.getElementById("mostrar").innerHTML="Tu calificacion es:"+decimal;
	
}