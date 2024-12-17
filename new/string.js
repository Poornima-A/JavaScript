let first_name = "Poornima";
let last_name = "Deepanraj"

//concatenation

let c=first_name+" "+last_name;
console.log("concatenation :"+c);

//concat
c=first_name.concat("",last_name);
console.log("Concat :" + c);

//Append
c = "Poornima"
c+="Deepanraj"

console.log("Append :"+c);

//Escaping

c='She can\'t run';
console.log("Escaping :" +c);

//length
c=first_name.length;
console.log("length :"+c);

//toUpperCase
c=first_name.toUpperCase();
console.log("Uppercase :"+c);

//toLowerCase
c=last_name.toLowerCase();
console.log("Lowercase :"+c);

//IndexOf
c=first_name.indexOf('r');
console.log("Indexof :"+c);

//lastIndexOf
c=first_name.lastIndexOf('a');
console.log("lastIndexof :"+c);

//charAt()
c=first_name.charAt(2);
console.log("charAt :"+c);

//charcodeAt()
c=first_name.charCodeAt(2);
console.log("charcodeAt :"+c);

//substr
c=first_name.substr(0,3);
console.log("substr :"+c);

//Substring
let text = "0123456789";
c=text.substring(0,5);
console.log("substring :"+c)

c=text.substring(5);
console.log("substring :"+c)

//slice

c=text.slice(2,4);
console.log("slice :"+c);

c=text.slice(-4);
console.log("slice :"+c);//print reverse

//split()

let a="Poornima working as a software tester";
c=a.split(" ");
console.log("split :" +c)
console.table(c);

//replace()

a= "I am from Karaikudi";
console.log("Before replacement :"+a)
c=a.replace('karaikudi','chennai');
console.log("After replacement :"+a);

//includes()
const pets = ["cat","dog","cow","goat"];
console.log(pets.includes("cat"));
console.log(pets.includes("rat"));

//trim
a=" Poornima ";
console.log("Before Trim :"+a.length);
a=a.trim();
console.log("after Trim :"+a.length);

//padStart & padEnd
// a=5;
// a=a.padStart(4,0);
// console.log(a);

// a=5;
// a=a.padEnd(4,0);
// console.log(a);

// a=5;
// a=a.padEnd(4,'$');
// console.log(a);

//string .fromcharcode()
console.log(String.fromCharCode(25))