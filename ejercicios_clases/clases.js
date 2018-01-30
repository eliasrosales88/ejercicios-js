/*
*1.- Crea un fichero HTML que incluya un fichero JS externo
*2.- Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto.
*3.- Di que la clase Moto tiene una característica llamada matricula
*4.- Crea un objeto de la clase Moto llamado miburra
*5.- Cambia la propiedad matrícula de miburra por el valor "SA1234H"
*6.- Imprime por pantalla el valor de la matrícula de miburra
*7.- Coloca dentro de la clase Moto otra propiedad llamada km
*8.- Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km
*9.- Demuéstralo creando otro objeto de la clase Moto e imprimiendo este valor por pantalla
*10.- Crea los getter y setter de km y matricula para la clase Moto
*11.- Utilízalos desde el objeto miburra
*12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
*13.- Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetro y comprueba que ha rellenado correctamente las propiedades de ese nuevo objeto con los parámetros del constructor
*14.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
*15.- Crea un objeto de la clase Aminal, llamado animalito
*16.- Imprime por pantalla el objeto animalito y la propiedad edad del objeto
*17.- Cambia la edad de animalito a 3
*18.- Imprime por pantalla la edad de animalito
*/

/*ES6*/
class Moto{
    constructor(matricula, km=0){
        this.matricula = matricula;
        this.km = km;
    }

    setMatricula(matricula){
        this.matricula = matricula; 
    }
    getMatricula(){
        return this.matricula;
    }
    setKm(km){
        this.km = km; 
    }
    getKm(){
        return this.km;
    }
}

miburra = new Moto("SA1234H");
console.log(miburra.matricula);

miburra = new Moto("Nueva matricula");
console.log(miburra.matricula);
console.log(miburra.km);

miburra.setKm(50);
console.log(miburra.km);

miburrota = new Moto ("PLACOTA", 70);
console.log(miburrota.matricula, miburrota.km);

class Animal{
    constructor (edad){
        this.edad = edad;
    }
}


animalito = new Animal(0);
console.log(animalito.edad);
animalito = new Animal(3);
console.log(animalito.edad);
/////////////////////////////////////////////////////
/*BREVE COMPARACION CON ES5*/
function Moto1(matricula, km=0){
    this.matricula = matricula;
    this.km = km;
}

miburraEs5 = new Moto1("ES5");

console.log(miburraEs5.matricula);
console.log(miburraEs5.km);

miburraEs5.km = 50;
console.log(miburraEs5.km);






