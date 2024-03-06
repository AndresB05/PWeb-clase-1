//1
let BMI = function (peso, altura){ // let funciona para declarar variables locales
    var IMC = peso / (altura**2) 

    if (IMC < 18.5){
       return "Bajo peso";
    }
    else if (IMC >= 18.5 && IMC < 24.9) {
    return "Normal";
    }
     else if (IMC >= 25 && IMC < 29.9) {
    return "Sobrepeso";
    }
     else {
    return "Obeso";
    }
} 
console.log(BMI(65, 1.8)) // "Normal"
console.log(BMI(72, 1.6)) // "Sobrepeso"
console.log(BMI(52, 1.75)) //  "Bajo de peso"
console.log(BMI(135, 1.7)) // "Obeso"

//2
let imprimirArreglo = function (){
    return Array.prototype.join.call(arguments, '\n'); // "join" toma un argumento que es el separador "call" llama al separador (join)
}
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo

//3
let fizzBuzz = function (numero){
    
    if (numero % 3 === 0 && numero % 5 === 0){ // % se utiliza para saber el resto de la divicion, en este caso divisores de 3
        return "fizzbuzz"                      // primero se pone el if "(numero % 3 === 0 && numero % 5 === 0)" por que si se pone al final no lo leera al ver coincidencias con el de abajo
    }
    else if (numero % 3 === 0){
        return "fizz"
    }
    else if (numero % 5 === 0){
        return "buzz"
    }
    else {
        return numero.toString();
    }
    
}
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

//4 

let numeroDeAes = function (veces){
    let contador = 0;

    for (let i = 0; i < veces.length; i++) { // i es una variable de bucles
        if (veces[i] === 'a') {
            contador++;
        }
    }
    return contador;
}
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

//5 

let numeroDeCaracteres = function (cadena,caracter) {
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) { // <-- para recorrer la cadena 
        if (cadena.charAt(i) === caracter) { // charAt devuelve el caracter solicitado 
            contador++;
        }
    }
    return contador;
}
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4

//6 

let capitalizar = function(cap) {
    if (cap && cap.length > 0) {

        return cap.charAt(0).toUpperCase() + cap.slice(1);
    } else {
        return cap;
    }
}
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""

//7 
let empiezanConA = function(arreglo) {
    return arreglo.filter(palabra => palabra.charAt(0).toLowerCase() === 'a'); // tolowerCase convertir una cadena de texto a minúsculas
}                                                                              // charAt(0) para obtener la primera letra de cada palabra
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []