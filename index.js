const cowsay =require('cowsay');
const intro =require('./inicio')
const  medio =require('./medio')
const final =require('./final')

// console.log('hola');
// console.log('soy un archivo');
//
// console.log(cowsay.say({
// 	text : "I'm a moooodule",
// 	e : "oO",
// 	T : "U "
// }));

// var let const - tipos de variables - iniciado nombre valor

// let nombre =  "Sofia";
// let edad = "28 años";
// let descripcion =  "Hola mi nombre es" + nombre + "Tengo" + edad;

const personaje = "Yolo";
const edad = Math.floor(Math.random() * 100);
const villano = "Equis";
const lugar = "Erangel";
const hobby = "Jugar";

console.log(intro.historia(personaje, lugar, edad));
console.log(medio.historiacentro(villano));
console.log(final.historiafinal(hobby));

console.log(cowsay.say({
text : 'Yeeeiiiii',
e : "oO",
T : "U "
}));

//redondea hacia arriba abajo
Math.round ();
//rendoea hacia abajo
Math.floor (50.5);
//rendoea hacia arriba
Math.ceil ();


// console.log(descripcion);
//
// console.log(cowsay.say({
// 	text : descripcion,
// 	e : "oO",
// 	T : "U "
// }));
