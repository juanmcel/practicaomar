// JavaScript Document
//positivo o negativo
function positivo(){
	var num=parseInt(document.getElementById("textinput").value);
	if(num<0){
	document.getElementById("num").innerHTML="Negativo";	
	}else{
		document.getElementById("num").innerHTML="Positivo";	
	}

}


function ordenar(){
	var d1=parseInt(document.getElementById("d1").value);
	var d2=parseInt(document.getElementById("d2").value);
	var d3=parseInt(document.getElementById("d3").value);
	//document.getElementById("mostrar1").innerHTML=d1+""+d2+""+d3;	
	if(d1 <d2 && d2<d3){
		document.getElementById("mostrar1").innerHTML=d1+", "+d2+", "+d3;
	}else if(d3<d2 && d2<d1){
		document.getElementById("mostrar1").innerHTML=d3+", "+d2+", "+d1;
	}else if(d2>d1 && d1>d3){
		document.getElementById("mostrar1").innerHTML=d3+", "+d1+", "+d2;
	}else if(d2>d3 && d3>d1){
		document.getElementById("mostrar1").innerHTML=d1+", "+d3+", "+d2;
	}else if(d1>d2 && d2>d3){
		document.getElementById("mostrar1").innerHTML=d3+", "+d2+", "+d1;
	}else if(d2<d1 && d1<d3){
		document.getElementById("mostrar1").innerHTML=d2+", "+d1+", "+d3;
	}else if(d2<d3 && d3<d1){
		document.getElementById("mostrar1").innerHTML=d2+", "+d3+", "+d1;
	}
}

function vocal(){
	var letra = document.getElementById("vocal").value;
	//
	if(letra=="A" ||letra=="a"){
		document.getElementById("mostrar2").innerHTML="Vocal";
	}else if(letra=="E" ||letra=="e"){
		document.getElementById("mostrar2").innerHTML="Vocal";
	}else if(letra=="I" ||letra=="i"){
		document.getElementById("mostrar2").innerHTML="Vocal";
	}else if(letra=="O" ||letra=="o"){
		document.getElementById("mostrar2").innerHTML="Vocal";
	}else if(letra=="U" ||letra=="u"){
		document.getElementById("mostrar2").innerHTML="Vocal";
	}else{
		document.getElementById("mostrar2").innerHTML="NO ES VOCAL";
	}
}

function creciente(){
	var dd1=parseInt(document.getElementById("dd1").value);
	var dd2=parseInt(document.getElementById("dd2").value);
	var dd3=parseInt(document.getElementById("dd3").value);
	
	if(dd1<=dd2 && dd2<=dd3){
		document.getElementById("mostrar3").innerHTML="en orden creciente";
	}else{
		document.getElementById("mostrar3").innerHTML="No se ordenaron en orden creciente";
	}
}


function mayor(){
	var x1 = parseInt(document.getElementById("x1").value);
	var x2 = parseInt(document.getElementById("x2").value);
	var x3 = parseInt(document.getElementById("x3").value);
	var x4 = parseInt(document.getElementById("x4").value);
	var x5 = parseInt(document.getElementById("x5").value);
	var x6 = parseInt(document.getElementById("x6").value);
	var x7 = parseInt(document.getElementById("x7").value);
	var x8 = parseInt(document.getElementById("x8").value);
	var x9 = parseInt(document.getElementById("x9").value);
	var x10 = parseInt(document.getElementById("x10").value);
	ordenar=[x1,x2,x3,x4,x5,x6,x7,x8,x9,x10];
	 
	var min = Math.min.apply(null,ordenar);
    var max=Math.max.apply(null, ordenar);
	
	document.getElementById("mostrar4").innerHTML="Mayor="+max+"  "+"Menor="+min;
}

function igualar(){
	var t1 = parseInt(document.getElementById("t1").value);
	var t2 = parseInt(document.getElementById("t2").value);
	var t3 = parseInt(document.getElementById("t3").value);
	if((t1*t2)==t3){
	document.getElementById("mostrar5").innerHTML="La multiplicacion es igual";	
	}else{
		document.getElementById("mostrar5").innerHTML="la multiplicacion no es igual al tercero";
	}
	
}

function conversor(){
	var kilos = parseFloat(document.getElementById("kilo").value);
	
	var option = parseFloat(document.getElementById("select").value);
	
	switch(option){
		case 1:
			var kkilos=kilos*1000;
			document.getElementById("mostrar6").innerHTML="Gramos:"+kkilos;
			break;
			
			case 2:
			var tonelada =kilos/1000;
			document.getElementById("mostrar6").innerHTML="Toneladas:"+tonelada;
			break;
			
			case 3:
			var libra=kilos*2.20;
			document.getElementById("mostrar6").innerHTML="Libras:"+libra;
			break;
			
			case 4:
			var onza=kilos*35.27;
			document.getElementById("mostrar6").innerHTML="Onzas:"+onza;
			break;
		default:
			
			break;
			
}

}

function sueldo(){
	var sueldo = parseInt(document.getElementById("sueldo").value);
	var years = parseInt(document.getElementById("years").value);
	
	if(years>10){
		var suel = sueldo*0.10;
		var resultado=suel+sueldo
		document.getElementById("mostrar7").innerHTML="tu aumento es de:"+suel+"<br>"+
		"tu sueldo con aumento es:"+resultado;
	}else if(years >5 && years<10){
		
		var suel1 = sueldo*0.07;
		var resultado2=suel1+sueldo
		document.getElementById("mostrar7").innerHTML="tu aumento es de:"+suel1+"<br>"+
		"tu sueldo con aumento es:"+resultado2;
	}
}












