// *******************************************************STRING***********************************************************

const name = "Nitin"
const  repcount = 1000

console.log(`My name is ${name} and my repocount is ${repcount}`);

const gameName =  new String("Change")

// console.log(gameName.length)
// console.log(gameName.endsWith('e'))
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('n'))
// console.log(gameName.split('n'))

const anotherString = "  Samay  "
// console.log(anotherString);
// console.log(anotherString.trim());

const url = "samay.com/samay^&raina"
// console.log(url.replace('^&','@'));

const TwoString = "Kolkata"
// console.log(TwoString.substring(0,4));
// console.log(TwoString.slice(0,4));
// console.log(TwoString.substring(-6,4)); -ve will not change the output 
// console.log(TwoString.slice(-6,4)); it counts the -ve numbering

const WebName = "Nitin/Bgmi/Player"
console.log(WebName.split('/'));
// console.log(WebName.split(' '));


const contentString = "Hello, world!";
const contentString2 = "How Are You"

console.log(contentString.blink());

console.log(contentString.concat(' ',contentString2));
console.log(contentString.bold("World"));


console.log(contentString.fontcolor("Red"));
console.log(contentString.fontsize(9));

