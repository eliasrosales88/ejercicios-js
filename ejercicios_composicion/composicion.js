
/*
1.- Crea un fichero HTML relacionado con un fichero JS
2.- Define una clase llamada Alumno que tenga las propiedades nombre, dni, tlf, email
*/
class Alumno{
    /*
    5.- Haz que el constructor de la clase Alumno permita meter los 4 valores a las 4 propiedades del objeto, haz que estos parámetros sean opcionales
    */
    /*
    13.- en el constructor añade un parámetro más que será el array de notas
    */
    
    constructor(nombre="", dni="", tlf="", email="", notas=[]){
        this.nombre = nombre;
        this.dni = dni;
        this.tlf = tlf;
        this.email = email;
/*
12.- Mete un nuevo atributo en la clase alumno llamado notas. Este atributo tiene que ser del tipo Array. En el constructor inicialízalo por defecto a []
*/
        this.notas = notas;
    }
    
/*
4.- Añade los getter y setter a las clase Alumno
*/
    getNombre(){
        return this.nombre;
    }
    getDni(){
        return this.dni;
    }
    getTlf(){
        return this.tlf;
    }
    getEmail(){
        return this.email;
    }
    
    setNombre(nombre){
        this.nombre = nombre;
    }
    setDni(dni){
        this.dni = dni;
    }
    setTlf(tlf){
        this.tlf = tlf;
    }
    setEmail(email){
        this.email = email;
    }
    /*
    14.- Crea un getter y un setter para notas
    */
    
    getNotas(){
        return this.notas;
    }
    setNotas(notas){
        this.notas = notas;
    }
/*
15.- Crea un método en Alumno que permita introducir una nueva nota (al final del array de notas)
*/
    addNota(nota){
        this.notas.push(nota);
    }
    
/*
17.- Crea un método que te haga la media de las notas de curso (todas las notas del array de notas)
*/
    getMediaNotas(){
        let notas = this.notas;
        let acum = 0;
        /* BUCLE for in
        for (const nota in notas) {
            acum += notas[nota].valor;
        }*/
        
        // BUCLE for of
        for (const nota of notas) {
            acum += nota.valor;
            
        }

        let resultado = acum/notas.length;

        return console.log("La media de notas es: ", resultado);
        
        

    }

/*
18.- Haz un programa que sea capaz de decirte si el alumno ha aprobado o no el curso.
*/
    isAprobado(){
        let notas = this.notas;
        let acum = 0;
        for (const nota in notas) {
            acum += notas[nota].valor;
        }

        let resultado = acum/notas.length;
        
        if(resultado>= 5){
            console.log(`Aprobado con ${resultado} como nota media`);
        }else{
            console.log(`Reprobado con ${resultado} como nota media`);
        }
    }
}

/*
3.- Crea un objeto de la clase Alumno
*/
var alumno1 = new Alumno();

/*
6.- Crea otro objeto de la clase Alumno pero utilizando el nuevo constructor de la clase, pasando los 4 parámetros
*/
var alumno2 = new Alumno("Pedro", "55110283Y", "+34680683840", "pedro@pedro.com");

/*7.- Crea la clase Nota que tenga dos atributos: valor, asignatura
*/
class Nota{
/*
10.- Modifica el constructor de la clase Nota para que admita 2 parámetros, uno para propiedad. Los parámetros deben poder ser opcionales. 
*/
    constructor(valor=0, asignatura=""){
        this.valor = valor;
        this. asignatura = asignatura;
    }
/*
9.- Mete los getter y los setter de la clase Nota
*/
getValor(){
    return this.valor;
}
getAsignatura(){
    return this.asignatura;
}
setValor(valor){
    this.valor = valor;
}
setAsignatura(asignatura){
    this.asignatura = asignatura;
}

}

/*
8.- Crea un objeto de la clase Nota
*/

var nota1 = new Nota(9, "HTML");


/*
11.- Crea un objeto de la clase Nota pero pasando los dos parámetro sen su creación
*/

var nota2 = new Nota(7, "javascript");

/*
16.- Crea un nuevo objeto Nota e introduce este nuevo objeto en un objeto de tipo Alumno mediante el método definido en el anterior ejercicio
*/
var nota3 = new Nota(8, "CSS");

var alumno3 = new Alumno("Maria", "55110284Y", "+34690684530", "maria@maria.com");

alumno3.addNota(nota1);
alumno3.addNota(nota2);
alumno3.addNota(nota3);

alumno3.getMediaNotas();
alumno3.isAprobado();
