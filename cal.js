function limpiarFormulario (){
	document.getElementById("miForm").reset();
}
var po = function (n1,n2){
	var num=parseFloat(document.getElementById("num").value);
	var num1=parseFloat(document.getElementById("num1").value);
	porcentaje= (num * 100)/ num1;
	return"El porcentaje es: "+porcentaje;
}