var resultado = "",variable="",resultado_Dos = "",segunda="",respuesta_Final=0,comodin=0,comodin_Dos=0,comodin_Tres=0,subCadena="";


function limpiar_Variables(){
	 resultado = "",variable="",resultado_Dos = "",segunda="",respuesta_Final=0,comodin=0,comodin_Dos=0,comodin_Tres=0;
}

function limpiarPantalla(){
	while(panel.children.length != 0)
			{
			panel.removeChild(display)
			}
	}

function agregarNumero(numero){
	  this.panel = document.getElementsByClassName("pantalla")[0];
	var span_numero = document.createElement('span');
	span_numero.id = "display";
	span_numero.title = numero
	var nodo_texto =document.createTextNode(numero);

if(respuesta_Final != 0 || comodin_Tres != 0)
{
	if (comodin == 1 || comodin == 2 || comodin == 3 || comodin == 4){
	
			limpiarPantalla()

			agregarPrimerNumero(0)
			comodin_Tres = 0;
}
}

	if(panel.children.length == 1){
	document.querySelectorAll("span")[1].style.display="none";
}


	if(panel.children.length <8){
	span_numero.appendChild(nodo_texto);
	panel.appendChild(span_numero);
	}
	else{
		alert("Has llegado al numero maximo de caracteres")
		}
	}

function agregarPrimerNumero(numero){
	var panel = document.getElementsByClassName("pantalla")[0];
	var span_numero = document.createElement('span');
	span_numero.id = "display";
	var nodo_texto =document.createTextNode(numero);

	span_numero.appendChild(nodo_texto);
	panel.appendChild(span_numero);

	}

//EMPIEZA borrar
	var borrar=document.getElementById("on").addEventListener('click',function(){
		limpiar_Variables();
		limpiarPantalla()
		agregarPrimerNumero(0)
	})//termina borrar

//SIGNO NEGATIVO
	var signo = document.getElementById("sign").addEventListener('click',function(){
		var cero = document.querySelectorAll("span")[1];
		var span_signo = document.createElement('span');
		span_signo.id = "display";
		span_signo.alt = "-"
		var signo = document.createTextNode("-")
		span_signo.appendChild(signo)


		if(panel.children.length == 1){
			alert("No hay numero a que agregarle signo")
		}
		else{
			panel.replaceChild(span_signo,cero)
			}

		})//termina signo


///////////OPERACION EN CADENA/////////////
		function operacion_EnCadena(){
			var primeros = document.querySelectorAll("span[id^='dis']");
			switch(comodin){

				case 1:
				variable = "";
				for(var i=2; i<= primeros.length; i++){
					var hijo_nodo =0;
					var y = document.getElementsByTagName("span")[i].childNodes[hijo_nodo].nodeValue
					variable = variable + y;
						}
					resultado = eval(resultado + "+" + variable)
					variable ="";
					comodin =""
				break;

				case 2:
				variable = "";
				for(var i=2; i<= primeros.length; i++){
					var hijo_nodo =0;
					var y = document.getElementsByTagName("span")[i].childNodes[hijo_nodo].nodeValue
					variable = variable + y;
						}
					resultado = eval(resultado + "-" + variable)
					variable ="";
					comodin =""
				break;

				case 3:
				variable = "";
				for(var i=2; i<= primeros.length; i++){
					var hijo_nodo =0;
					var y = document.getElementsByTagName("span")[i].childNodes[hijo_nodo].nodeValue
					variable = variable + y;
						}
					resultado = eval(resultado + "*" + variable)
					variable ="";
					comodin =""
					break;

					case 4:
					variable = "";
					for(var i=2; i<= primeros.length; i++){
						var hijo_nodo =0;
						var y = document.getElementsByTagName("span")[i].childNodes[hijo_nodo].nodeValue
						variable = variable + y;
							}
						resultado = eval(resultado + "/" + variable)
						variable ="";
						comodin =""
						break;
		}
		
	}

////////////////////OPERACIONES//////////////////////////

//EMPIEZA SUMAAAAA
document.getElementById("mas").addEventListener("click",function(){
alert("INGRESA DIGITO A SUMAR")
var primeros = document.querySelectorAll("span[id^='dis']");

if(respuesta_Final != 0){
	respuesta_Final=0;
	comodin=0;
	resultado="";
	}

if(comodin == 1 || variable != "" || comodin != 0){
	operacion_EnCadena();
}
else{
resultado= ""
	for(var i=2; i<= primeros.length; i++){
		var hijo_nodo =0;
		var x = document.getElementsByTagName("span")[i].childNodes[hijo_nodo].nodeValue
		resultado = resultado + x ;
	}
}
			limpiarPantalla()	
			agregarPrimerNumero(0)
			agregarPrimerNumero(resultado)
			comodin=1;
			comodin_Dos=1;
			comodin_Tres=1;
			document.getElementsByClassName("pantalla")[0].querySelector("span").style.display="none";

})////Finaliza SUMAAAAA


//////EMPIEZA RESTA
document.getElementById("menos").addEventListener("click",function(){
alert("INGRESA DIGITO A RESTAR")
	var primeros = document.querySelectorAll("span[id^='dis']");

if(respuesta_Final != 0){
	respuesta_Final=0;
	comodin=0;
	resultado="";
	}

	if(comodin == 2 || variable!="" || comodin != 0){
		operacion_EnCadena();
	}

else {
	resultado == ""
	for(var i=2; i<= primeros.length; i++){
		var hijo_nodo =0;
		var x = document.getElementsByTagName("span")[i].childNodes[hijo_nodo].nodeValue
		resultado = resultado + x ;
		}

}
		limpiarPantalla()

		agregarPrimerNumero(0)
		agregarPrimerNumero(resultado)
		comodin_Dos=2;
		comodin = 2;
			comodin_Tres=2;
		document.getElementsByClassName("pantalla")[0].querySelector("span").style.display="none";
})
//FINALIZA RESTA


//////EMPIEZA MULTIPLICACION
document.getElementById("por").addEventListener("click",function(){
alert("INGRESA DIGITO A MULTIPLICAR")
	var primeros = document.querySelectorAll("span[id^='dis']");

if(respuesta_Final != 0){
	respuesta_Final=0;
	comodin=0;
	resultado="";
	}


	if(comodin == 3 || variable!="" || comodin != 0){
		operacion_EnCadena();
	}

else {
	resultado == ""
	for(var i=2; i<= primeros.length; i++){
		var hijo_nodo =0;
		var x = document.getElementsByTagName("span")[i].childNodes[hijo_nodo].nodeValue
		resultado = resultado + x ;
		}
}
		limpiarPantalla()
		agregarPrimerNumero(0)
		agregarPrimerNumero(resultado)
		comodin_Dos=3;
		comodin = 3;
		comodin_Tres=3;
		document.getElementsByClassName("pantalla")[0].querySelector("span").style.display="none";
})
//FINALIZA multiplicacion


//////EMPIEZA DIVIDIR
document.getElementById("dividido").addEventListener("click",function(){
alert("INGRESA DIGITO A DIVIDIR")
	var primeros = document.querySelectorAll("span[id^='dis']");

if(respuesta_Final != 0){
	respuesta_Final=0;
	comodin=0;
	resultado="";
	}


	if(comodin == 4 || variable!="" || comodin != 0){
		operacion_EnCadena();
	}

else {
	resultado == ""
	for(var i=2; i<= primeros.length; i++){
		var hijo_nodo =0;
		var x = document.getElementsByTagName("span")[i].childNodes[hijo_nodo].nodeValue
		resultado = resultado + x ;
		}
}
		limpiarPantalla()
		agregarPrimerNumero(0)
		agregarPrimerNumero(resultado)
		comodin_Dos=4;
		comodin = 4;
		comodin_Tres=4;
		document.getElementsByClassName("pantalla")[0].querySelector("span").style.display="none";
})
//FINALIZA dividir


////////EMPIEZA IGUAAAAAAL
document.getElementById("igual").addEventListener("click",function(){
//respuesta_Final = ""
//resultado_Dos = "";
if(respuesta_Final != 0){
	}
	else{
		resultado_Dos="";
		}

var segundos = document.querySelectorAll("span[id^='dis']");
if(resultado_Dos == ""){
for(var i=2; i<= segundos.length; i++){
	var hijo_nodo =0;
	var x = document.getElementsByTagName("span")[i].childNodes[hijo_nodo].nodeValue
	resultado_Dos = resultado_Dos + x;
}
}
	limpiarPantalla()

if(comodin_Dos == 1)
	{
		if(respuesta_Final == 0){
	respuesta_Final = parseFloat(resultado) + parseFloat(resultado_Dos)
	}
	else{
		respuesta_Final = parseFloat(respuesta_Final) + parseFloat(resultado_Dos);
	}

}
else if(comodin_Dos == 2){
	if(respuesta_Final == 0){
	respuesta_Final = parseFloat(resultado) - parseFloat(resultado_Dos)
	}
	else{
		respuesta_Final = parseFloat(respuesta_Final) - parseFloat(resultado_Dos);
	}
}
else if(comodin_Dos == 3){
	if(respuesta_Final == 0){
	respuesta_Final = parseFloat(resultado) * parseFloat(resultado_Dos)
	}
	else{
		respuesta_Final = parseFloat(respuesta_Final) * parseFloat(resultado_Dos);
	}
}
else if(comodin_Dos == 4){
	if(respuesta_Final == 0){
	respuesta_Final = parseFloat(resultado) / parseFloat(resultado_Dos)
	}
	else{
		respuesta_Final = parseFloat(respuesta_Final) / parseFloat(resultado_Dos);
	}
}
			
		agregarPrimerNumero(0)
		agregarPrimerNumero(respuesta_Final.toPrecision(6))
		document.getElementsByClassName("pantalla")[0].querySelector("span").style.display="none";
		
})



///////// AGREGAR CARACTERES/////////////////
var numero_cero=document.getElementById("0").addEventListener('click',function(){
	agregarNumero(0)

	})
	var numero_uno=document.getElementById("1").addEventListener('click',function(){
	agregarNumero(1)

	})
	var numero_dos=document.getElementById("2").addEventListener('click',function(){
	agregarNumero(2)

	})
	var numero_tres=document.getElementById("3").addEventListener('click',function(){
	agregarNumero(3)

	})
	var numero_cuatro=document.getElementById("4").addEventListener('click',function(){
	agregarNumero(4)

	})
	var numero_cinco=document.getElementById("5").addEventListener('click',function(){
	agregarNumero(5)

	})
	var numero_seis=document.getElementById("6").addEventListener('click',function(){
	agregarNumero(6)

	})
	var numero_siete=document.getElementById("7").addEventListener('click',function(){
	agregarNumero(7)

	})
	var numero_ocho=document.getElementById("8").addEventListener('click',function(){
	agregarNumero(8)

	})
	var numero_nueve=document.getElementById("9").addEventListener('click',function(){
	agregarNumero(9)

	})
	var punto=document.getElementById("punto").addEventListener('click',function(agregarN){
	if(panel.querySelector("span[title^='.']")){
	alert("Ya tienes un punto en la operacion")
	}
	else{
		agregarNumero('.')
		}//termina if
	})
