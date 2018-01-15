/*
1.- Crea un array de 200 posiciones.
2.- Imprime por pantalla los datos del ejercicio 1.
3.- Cambia los datos de las posiciones 4, 7 y 18 del array y pon un valor de tipo string.
4.- En las posiciones 9, 34 y 45 pon un valor booleano.
5.- Crea un array de 30 posiciones.
6.- Recorre el array anterior con todos los tipos de bucle.
 (while. do-while, for, for-in) e imprime por pantalla los datos.
7.- Define una variable booleana llamada tengoCarnet.
8.- Define una sentencia condicional para que si la variable tengoCarnet
 es true, saque un mensaje por pantalla diciendo que puedo conducir.
9.- Define una variable llamada nota (como la de un examen).
10.- Haz un codigo para que dependiendo de dicha nota si es 
menor que 5 sea un suspenso, entre 5 y 6 un aprobado, entre 
7 y 8 un notable y entre 9 y 10 un sobresaliente.
*/

var array200 = [];
for (let i = 0; i < 200; i++) {
    array200[i] = i ;
    console.log(array200[i]);
}

array200[4] ="Cambio valor de posicion 4";
array200[7] ="Cambio valor de posicion 7";
array200[18] ="Cambio valor de posicion 18";

array200[9] =true;
array200[34] =true;
array200[45] =true;

console.log(array200);
var array30_w =[];
var array30_d_w =[];
var array30_f =[];
var array30_f_o =[];

// WHILE
let i = 0;
while (i < 30) {
    array30_w[i] = i;
    console.log("WHILE", array30_w[i]);
    i++;
}

//DO-WHILE
i = 0;
do{
    array30_d_w[i] = i;
    console.log("DO WHILE", array30_d_w[i]);
    i++;
} while (i < 30);

// FOR
for (let i = 0; i < 30; i++) {
    array30_f[i] = i;
    console.log("FOR", array30_f[i]);
}

//FOR IN
i = 0;
for (i in array30_f) {
    array30_f[i] = i;
    console.log("FOR IN", array30_f[i]);
}
//FOR OF
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}

var tengoCarnet = true;

if (tengoCarnet === true) {
    console.log("Tengo carnet!, Puedo condicir")
}else {
    console.log("No tengo carnet");
}

var nota = 9.5;
if (nota < 5) {
    console.log("Tu nota es menor que 5");
} else if( nota >= 5 && nota < 7){
    console.log("Aprobado");
} else if( nota >= 7 && nota <= 8){
    console.log("Notable");
} else if( nota >= 9 && nota <= 10){
    console.log("Sobresaliente");
}























