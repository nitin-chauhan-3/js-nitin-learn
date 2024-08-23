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


// -------------------------------------------------------------------Memory-----------------------------------------------------------------

// Stack (Primitive), Heap (Non - Primitive)
// Stack 
let myName = "nitin"

let anotherName= myName
anotherName = "nitesh"

// console.log(myName);
// console.log(anotherName);

// Heap 

let user1 = {
    RollNo: 17,
    Branch: "CSE"
}

let user2 = user1 

user2.RollNo = 44 
user2.Branch = "ME"

console.log(user1);
console.log(user2);
