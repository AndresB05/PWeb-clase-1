/*const nombre = "Pedrito";

nombre = "Jhon"
console.log(nombre);

function saludar(nombre){ 
    const saludo = "const";
    saludo = nombre;
    console.log(`Hola ${nombre}`);
}

saludar("Pedrito");*/

/*una funcion que resiva un string y retorne true si el string es igual a 2f o a 3f de lo contrario debe retornar false*/

//funcion declarativa
function contraseña(input){
    return input == "2F" || input == '3F' ? true: false
}

console.log("contraseña1", contraseña("17"));

//funcion anonima
let contraseña2 = function (input) {
    return input == "2F" || input == '3F'
}
console.log("contraseña2", contraseña("17"));
// funcion anonima no tiene nombre

//funcion flecha - arrow function 
let contra = (input) => {
    return input == "2F" || input == '3F'
}
console.log("contra", contra("FF"));

let validarMujeres= (mujer)=>{
    const mujeres = ['Danna','Darly','Salome'];
    return mujeres.find(muj => muj.toLowerCase() == mujer.toLowerCase());
}
console.log(validarMujeres("Danna"));

let splitFun = (nombres)=>{
    const nombre = nombres.split("-")[0];
    const apellidos = nombres.split("-")[1];
    const edad = nombres.split("-")[2]; 
    console.log(
        `Mi nombres es: ${nombre} ${apellidos} y tengo ${edad}`
    )
}
splitFun("amilkar-hernadez-23")

/* calculo de impuestos, escribe una funcion llamada "calcular impuestos" que resiva 2 argumentos 1 se llama edad y el otro ingresos
si la edad es mayor o igual a 18 y los ingresos son igual o mayores a 1000 entonces debe retornar los ingresos multiplicado por el 40%*/

const array = [{
    name: 'danna',
    lastname: 'florez',
    age: 23
},
{
    name: 'Daniel',
    lastname: 'rubio',
    age: 19
}];

let funcionObjeto = (arrayObjetos)=>{
    arrayObjetos.array.forEach((obj) => console.log(log.name))
        
}

// swich, while y ciclos  estudiar
// react, principio solid, json