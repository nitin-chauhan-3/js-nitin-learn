// Dates

let myDate = new Date()

// console.log(myDate);
// Methods related to date 

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

let myCreateDate = new Date(2025, 1, 21)
// console.log(myCreateDate.toString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(myCreateDate.getMonth());
console.log(myCreateDate.getTimezoneOffset());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());


