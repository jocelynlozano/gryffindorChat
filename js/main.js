window.addEventListener("load", function() {
	var boton=document.getElementById("boton");
	var textArea=document.getElementById("texto");
	var contador=document.getElementById("contador");
	var caracteres=contador.innerHTML =140;
		
	boton.addEventListener("click",function(e){
		e.preventDefault();
		agregarMensaje(textArea.value);
		textArea.value = "";
		caracteres = 140;
		boton.disabled = true;
	});
		
	function agregarMensaje(txt){
		var parrafo = document.createElement("p");
		parrafo.innerHTML = txt;
		var mensaje = document.getElementById("mensaje");
		mensaje.insertBefore(parrafo, imprimir.childNodes[0]).classList.add("box");
	}
});



textArea.addEventListener("keydown",function(){
		boton.disabled=false;
});

var longitud = textArea.value.length;
if (longitud <= caracteres) {
	contador.innerHTML = caracteres - longitud;
} else {
	contador.innerHTML=caracteres - longitud;
};
