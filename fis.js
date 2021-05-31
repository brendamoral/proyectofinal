function limpiarFormulario (){
	document.getElementById("miForm").reset();
}
var dis = function (n1,n2){
	var num=parseFloat(document.getElementById("num").value);
	var num1=parseFloat(document.getElementById("num1").value);
	distancia= num * num1;
	return"La distancia es: "+distancia + " millas";
}