window.addEventListener("load", function() {
	var publicar = document.getElementById("publicar");
		publicar.addEventListener("click", function(e) {
			e.preventDefault();

    var text-tweet = document.getElementById("text-tweet").value;
    	document.getElementById("text-tweet").value = "";

    var publicacion = document.createElement("p");
    	publicacion.innerText = text-tweet;

    var contenedor = document.getElementById("contenedor");
    	contenedor.insertBefore(publicacion, contenedor.childNodes[0]);
  });
});

