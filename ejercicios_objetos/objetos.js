/*
*1.- Crea un html con un archivo externo JS asociado para resolver estos ejercicios
*2.- Crea un objeto Javascript que se llame cliente, dentro del objeto coloca las siguientes propiedades: nombre del cliente, direccionFisica, email ,tlf y personaConacto. Al crear el objeto colócale valores a cada propiedad.
*/
var cliente ={
    nombreCliente: "Pedro", 
    direccionFisica:"Valdemoro 41", 
    email:"pedro@mail.com",
    tlf: "+341234567",
    personaConacto:"Laura",
/*
*16.- Introduce una nueva propiedad en el objeto cliente (1º) llamada facturacion, su valor inicial será un array de 2 posiciones con dos elementos de tipo numérico 4 y 25
*/
    facturacion: [4,25],
    totalFacturacion: 0,
/*
*22.- Coloca en el primer objeto una nueva propiedad llamada direccionFiscal, el valor de esta propiedad será un objeto, las propiedades de este nuevo objeto serán, calle, ciudad, piso, puerta y CP.
*/
    direccionFiscal:{
        calle:"Mi direccion fiscal",
        ciudad:"", 
        piso:"", 
        puerta:"", 
        CP:"28901"
    },
/*
*18.- Haz un método dentro del primer objeto llamado addFactura, al que se le pase como parámetro un número, que almacene ese valor como una nueva posición al final del array de facturacion del primer objeto
*/
    addFactura: function(numero){
        return  this.facturacion.push(numero);     
    },
/*
*20.- Crea un nuevo método en el primer objeto que sea capaz de devolver el total de facturación de ese objeto, total de los valores almacenados en el array facturacion del primero objeto.El método se llamara totalFacturacion
*/
    getTotalFacturacion: function(facturacion){
        var acum = 0;
        
        for (var factura in facturacion) {
            acum += facturacion[factura];
            
        }
        
        
        return  this.totalFacturacion = acum;
    },
/*
*10.- Añade al primer objeto un método (función) llamado toString, dicho método no recibe parámetros de entrada y devuelve una cadena de caracteres con los datos de las propiedades de ese objeto, indicando el nombre del objeto el nombre de cada propiedad y el valor asociado a cada propiedad
*/
    toString: function(){
        return `Objeto[nombreCliente: ${this.nombreCliente}, direccion_fiscal: ${this.direccionFisica}, email:${this.email}, tlf: ${this.tlf}, personaConacto: ${this.personaConacto}]`
    },
/*
*14.- Añade un método setter y otro getter al primero objeto por cada propiedad definida en él, sin contar los métodos. 
*/
    setnombreCliente: function(nombreCliente){
        return this.nombreCliente = nombreCliente;
    },
    setdireccionFisica: function(direccionFisica){
        return this.direccionFisica = direccionFisica;
    },
    setEmail: function(email){
        return this.email = email;
    },
    setTlf: function(tlf){
        return this.tlf = tlf;
    },
    setpersonaConacto: function(personaConacto){
        return this.personaConacto = personaConacto;
    },
    getNombreCliente: function(){
        return this.nombreCliente;
    },
    getDireccionFisica: function(){
        return this.direccionFisica;
    },
    getEmail: function(){
        return this.email;
    },
    getTlf: function(){
        return this.tlf;
    },
    getPersonaContacto: function(){
        return this.personaConacto;
    },
}

/*
*3.- Crea otro objeto con el nombre segundoCliente con las mismas propiedades pero con distintos valores.
*/
var segundoCliente ={
    nombreCliente: "Laura", 
    direccionFisica:"Valdemoro 41", 
    email:"laura@mail.com",
    tlf: "+341234567",
    personaConacto:"Pedro",
/*
*12.- Añade un método toString similar en el segundo objeto
*/
    toString: function(){
        return `Objeto[nombreCliente: ${this.nombreCliente}, direccion_fiscal: ${this.direccionFisica}, email:${this.email}, tlf: ${this.tlf}, personaConacto: ${this.personaConacto}]`
    }
}

/*
*4.- Imprime por pantalla el nombre del primer objeto
*/
console.log("Punto 4", cliente.nombreCliente);

/*
*5.- Imprime por pantalla el email del segundo objeto
*/
console.log("Punto 5",segundoCliente.email);

/*
*6.- Cambia el nombre del primero objeto por el valor "Maderas Peralta"
*/
cliente.nombreCliente = "Maderas Peralta";

/*
*7.- Imprime el valor del nombre del primer objeto
*/
console.log("Punto 7", cliente.nombreCliente);

/*
*8.- Cambia el email del segundo objeto por el valor "info@micasuci.com"
*/
segundoCliente.email = "info@micasuci.com";

/*
*9.- Imprime el email por pantalla del segundo objeto
*/
console.log("Punto 9", segundoCliente.email);

/*
*11.- Imprime por pantalla el valor devuelto por el método toString del primer objeto
*/
console.log("Punto 11", cliente.toString());

/*
*13.- Imprime por pantalla el valor devuelvo por el método toString del segundo objeto
*/
console.log("Punto 13", segundoCliente.toString());

/*
*15.- Utiliza todos los métodos definidos en el primer objeto dentro de tu código JS
*/
console.log("Punto 15 SETTER", cliente.setnombreCliente("Carla"));
console.log("Punto 15 SETTER", cliente.setdireccionFisica("Salamanca 25"));
console.log("Punto 15 SETTER", cliente.setEmail("carla@carla.com"));
console.log("Punto 15 SETTER", cliente.setTlf("+584141176454"));
console.log("Punto 15 SETTER", cliente.setpersonaConacto("Montse"));

console.log("Punto 15 GETTERS", cliente.getNombreCliente());
console.log("Punto 15 GETTERS", cliente.getDireccionFisica());
console.log("Punto 15 GETTERS", cliente.getEmail());
console.log("Punto 15 GETTERS", cliente.getTlf());
console.log("Punto 15 GETTERS", cliente.getPersonaContacto());

/*
*17.- Imprime por pantalla el valor de la primera posición del array almacenado en la propiedad facturacion del primer objeto
*/
console.log("Punto 17", cliente.facturacion[0]);
cliente.addFactura(4); 

/*
*19.- Al imprimir por pantalla el número de elementos de array facturacion debería indicar que tiene 3 elementos
*/
console.log("Punto 19", cliente.facturacion.length);

/*
*21.- Imprime por pantalla el valor devuelto por la llamada al método totalFactuacion del primer objeto
*/
cliente.getTotalFacturacion(cliente.facturacion);
console.log("Punto 21", cliente.totalFacturacion);

/*
*23.- Imprime por pantalla el valor de la ciudad de la dirección fiscal del primer objeto
*/
console.log("Punto 23", cliente.direccionFiscal.calle);

/*
*24.- Cambia el CP de la dirección fiscal del primer objeto e imprime por pantalla dicho valor.
*/
cliente.direccionFiscal.CP = "CP cambiado";
console.log("Punto 24", cliente.direccionFiscal.CP);