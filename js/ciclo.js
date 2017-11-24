// JavaScript Document
//ciclos 
 function ciclofor(){
	 var incremento=0;
	 for(var i=1; i<=1000; i++){
		 incremento=i+incremento;
		
		 
	 }
	 document.write(incremento);
 }

//ciclofor();

function promedio(){
	var calificacion=0;
	var resul;
	for(var prom=0;prom<10;prom++){
	 //var valor =parseFloat(prompt("dime el numero"prom));
		calificacion =calificacion+prom;
		resul=calificacion/10;
	}
	alert(resul);
}

//promedio();

// ciclo while
function whilee(){
var i=1;
	var suma = 0;
while(i<=1000){
	suma=suma+i;
	i++;
}
	
	alert(suma);
	}
//whilee();


function dowile(){
	var i=1;//inicio
	var suma = 0;
	do{
		//tope
		suma+=i;// suma compacta
		i++;
	}while(i<=1000);// condicion
	alert(suma);
}

//dowile();
//multiplicacion con sumas
function multiplicacion(){
	var incremento=0;
	var valor1 = parseInt(prompt("dime un numero"));
		var valor2 = parseInt(prompt("dime otro numero"));
	for(var i=1;i<=valor1;i++){
		//incremento+=i+valor2;
		incremento=incremento+valor2;
	}
	alert(incremento);
}

//multiplicacion();



//potencias
function exponente(){
	var incremento=0;
	var valor1 = parseInt(prompt("dime un numero"));
	var i=0;
	while(i<=valor1){
		incremento=valor1*valor1;
		i++;
	}
	alert(incremento);
	}
	


//exponente();

function sumatoria(){
	var incremento=0;
	var valor1 = parseInt(prompt("dime un numero"));
	var i=0;
	while(i<=valor1){
		incremento=incremento+i;
		i++;
	}
	alert(incremento);
	}
//sumatoria();




function primos(){
	
	
		
	function iniciar(limite){
		for(var i=1;i<=limite;i++){
			if(esprimo(i)){
				document.write("numero primo:"+i+"<br>");
			
		}

}
	}
		
	
	






	
	function esprimo(numero){
	
		var aux;
		for(var cont=2;cont<numero;cont++){
				
			aux=numero%cont;
			
if(aux==0){
return false;
	
}else{
	return true;
	
}


}

		}
	//console.log(esprimo(9));
iniciar(100);
	
}


//primos();




function piramide(){
	var incremento=0;
	var valor1 = parseInt(prompt("dime un numero"));
	
	for(var i=1;i<=valor1;i++){
		//incremento+=i+valor2;
		
	for(var y=1;y<=i;y++){
		//incremento+=i+valor2;
		document.write("*"+"");
	
	
	}
	document.write("<br>"+"");
	}
	alert(incremento);
}

//piramide();


function media(){
	var incremento=0;
 var	promedio1;
	var valor1 = parseInt(prompt("el numero de calificaciones"));
	
	for(var i=1;i<=valor1;i++){
		var valor2 = parseInt(prompt("calificacion1:"+" "+i));
	incremento=incremento+valor2;
	promedio1=incremento/valor1;
	}
	alert(promedio1);
}
//media();


function primos2(){
	for(var i=0;i<=100;i++){
		var count=0;
		for(var j=0;j<=i;j++){
		if(i%j==0){
			count++;
		}
			
	}
		if(count==2){
				document.write(i+"<br>");
			}
	}
}

primos2();








