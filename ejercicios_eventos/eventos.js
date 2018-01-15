/*
1.- Crea un fichero html con un fichero JS asociado
2.- Haz que cuando el DOM esté cargado saque un mensaje por consola: "Dom cargado", la función que se ejecutará se llamará init
*/
/*
3.- Haz que cuando Se haya cargado completamente la página (onload) saque un mensaje por consola: "Página cargada",
la función que se ejecutará se llamará loaded
4.- Introduce un enlace a google en el código HTML cuyo identificativo sea "mienlace" con el texto "Vete a Google"*/
/*5.- Haz que cuando se pulse el enlace ("click"), en vez de ir a Google , se quede en la página donde está
(utilizando el preventDefault() ), y saque un mensaje por pantalla "Enlace pulsado", la función a la que 
llamará será "gestionaClick". Recuerda que este cambio del DOM sólo se puede realizar cuando el DOM está completamente cargado.
*/
function gestionaClick(evento) {
    evento.preventDefault();
    console.log("Enlace pulsado");
}

/*
6.- Introduce un botón cuyo identificativo sea "miboton" con el Texto: "Estoy maldito!"
7.- Haz que cuando se pulse dicho botón, saque un mensaje por consola con el mensaje: "MUHAHAHAHAHA!", la función se llamará risaMalvada
*/
function risaMalvada(evento) {
    console.log("MUHAHAHAHAHAHA!");
}


/* Se carga el DOM y el resto de la página web */
function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);

function loaded(event) {
    console.log("Dom cargado");

    // DE AQUI EN ADELANTE COLOCAMOS EL CODIGO PARA GESTIONAR EVENTOS 
    var enlace = document.getElementById("mienlace");
    enlace.addEventListener("click", gestionaClick);
    
    var risa = document.getElementById("miboton");
    risa.addEventListener("click", risaMalvada);
}
document.addEventListener("DOMContentLoaded", loaded); 

