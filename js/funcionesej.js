// JavaScript Document
var array = new Array();
for (var i=1; i<=100; i++){
	if (isPrint(i)){
		array.push(i);
	}
} 

var cad="";
for(var i=0; i<=array.length;i++){
	cad+="["+array[i]+"]"
}
document.write(cad);

function isPrint(num){
	
	var es= true;
	for(var i=2; i<num; i++){
		if(num%i==0){
			es = false;
			break;
		}
	}
if(num==1)
	es = false;
	return es;
}
