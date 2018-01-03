	//crear evento boton
	/*var tecla= document.getElementById("boton");
	tecla.addEventListener("click", function (){

	//Limpiar area de tarea
	 var tarea = document.getElementById("tarea").value;
	 document.getElementById("tarea").value = "";

	 //Lista de tareas
	 var contenedor = document.getElementById("contenedor");

	var newTarea = document.createElement("div");*/



	/*Cuadro inicial para añadir texto
	function lista_click(){
		var lista = document.getElementsByClassName("lista").value;
		lista.addEventListener("click")
	}*/

	/*Cear Lista de tareas*/

		function listaTareas(){

			var tarea = document.getElementById("tareaInput").value;
			var divListaTareas = document.getElementById('listaTareas')
			var divTarea = document.createElement ("div");
			divTarea.innerHTML = (tarea);
			divListaTareas.appendChild(divTarea);
	}


	/*/mostrar y ocultar lista de tareas
	function ocultar_mostrar(){
		document.getElementsByclass('tareaInput').style.display = 'none';
		document.getElementsByclass('tareaInput').style.display = 'visibility';
	}

	//Ocultar lista tareas
	function mostar_ocultar(){
		document.getElementById('tareaInput').value = "";
			document.getElementsByClassName("class").style.display = "none";
		var tarea= document.getElementsByClassName(".tarea");
		if(tarea.style.display == "none"){
			mostrar();
		}else{
			ocultar();
		}
	}*/