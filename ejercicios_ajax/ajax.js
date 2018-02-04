/*
Ajax

1* Crea un fichero llamado ajax.html y asociale Jquery
2* Crea una función init asociada al document.ready
3* Mete un botón con el texto "Get" y el id "getAjax" en el HTML y asociale una función al click
4* Crea un fichero llamado titulo.html que ocntenga un elemento h1 con un texto
5* Crea un div en el ajax.html con el id="resultados", en est div iremos presentando los resultados de las peticiones ajax
6* Haz que la función del click del botón "Get" haga una petición get al fichero titulo.html y presente los datos que devuelva la petición dentro del div de resultados
7* Recupera del repositorio de github el fichero formularios.php, este fichero es donde intentaremos mandar los datos de la petición post
8* Crea un botón con el texto "post" con el id postAjax en el fichero ajax.html asóciale una función al click
9* Dentro de la función del click del botón Post haz una llamada post al fichero formularios.php, envía los datos de un usuario: nombre: Pepe, dir: Calle mayor, ciudad: Madrid, años: 34.
10* Al gestionar los datos devueltos por el servidor de la petición post imprime los datos devueltos por el div de resultados.
11 Comprueba que los mismos datos que has enviado estén en los datos que has recibido
12 Recupera el fichero ajax.json del repositorio de github
13 Crea un botón con el texto "Coge  Json" y el id getJson y asócialo a una función del click
14 Haz que cuando se pulse el botón Coge Json realice una petición get al fichero ajax.json e imprima los datos dentro del div de resultados
15 Cambia la impresión de resultados del ejercicio anterior para que mediante un "bucle" imprima uno a uno los datos del array dentro de un párrafo por cada resultado
*/


// USANDO METODO GET DE JQUERY
function peticionGet(){
    console.log("Haciendo la peticion get")
    $.get("titulo.html", function(datos, status, xhr){                  // https://www.w3schools.com/jquery/ajax_get.asp
        $("#resultados").html(datos);
        console.log(status);
        console.log(xhr);
    });  
}
//-------------------------------------------------------------




// PETICION GET USANDO VANILLA JAVASCRIPT 
function peticionGetJavascript( theUrl, callback){                      // https://stackoverflow.com/questions/247483/http-get-request-in-javascript
    console.log("Peticion get con javaScript!");
        
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)           //https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/readyState
        callback(xmlHttp.responseText);
    }

    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function pruebaCallback(responseText){

    var divResultados = document.getElementById("resultados"); 
    divResultados.innerHTML = responseText;
}





//PETICION POST JQUERY
function peticionPostJquery(){
    console.log("Haciendo la peticion post");

$.post("formularios.php", {"nombre": "Pepe", "dir": "Calle mayor", "ciudad": "Madrid", "años": 34}, function(data){
    $("#resultados").html(data);
})
}
//----------------------------------------------------

function init(){

    console.log("Dom cargado")


// Peticion get con Jquery
    $("#getAjaxJquery").click(peticionGet);


// Peticion get con javaScript
    var buttonGetJavascript = document.getElementById("getAjaxJavascript");
    buttonGetJavascript.addEventListener("click", function(){
        peticionGetJavascript("titulo.html", pruebaCallback);
    });

// Peticion post con Jquery
    $("#postAjaxJquery").click(peticionPostJquery);
    



}

$(document).ready(init);