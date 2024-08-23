// Primitive 

// Types : String, Number, Boolean, null, undefiend, Symbol,BigInt

// Note: JS is Dynamically typed language 

const id = Symbol('321');
// const anotherId  = Symbol('321');

// console.log(id)
// console.log(anotherId);

// console.log(id==anotherId);

// Reference (Non Primitive)

// Type: Array, Objects, Functions

// DataType According to Documentation [Array and object => Object] but [Function => objectFunction]

// Examples

const heros = ["Hanuman","Krishna","Ram"]
let myfunction = function(){
    console.log("hell yeah");
}
let myObj = {
    name:  "Hanumna",
    age: 45,
}

console.log(typeof myObj);
console.log(typeof heros);
console.log(typeof id);
console.log(typeof myfunction);
