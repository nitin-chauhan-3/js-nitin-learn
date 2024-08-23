// DataType Comparisons
// console.log("2">2);
// console.log("2"==2);
// In the above comparison js converts the datatype and then comparison begins

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// Here null is converted into a number, treating it as 0.
// That's why null>0 is False and null>=0 is True

// Similarly for undefined

console.log(undefined>null);
console.log(undefined>=null);
console.log(undefined==null);
console.log(undefined===null);
