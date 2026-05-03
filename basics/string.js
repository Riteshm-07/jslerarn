const name = "ritesh"
const repoCount = 50
 console.log(name + repoCount + "value");

 console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

 const gameName = new String('ritesh.com')
 console.log(gameName[11]);
console.log(gameName.__proto__);

console.log(gameName.length);  // 10 
console.log(gameName.toUpperCase()); //
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "   ritesh   "
console.log(newStringOne);
console.log(newStringOne.trimStart());

const url = "https://ritesh.com/ritesh%20mahabale"
console.log(url);

console.log(url.replace('%20','_'))
console.log(url.replace('ritesh','ashh'))

console.log(url.includes('ritesh'));

console.log(gameName.split('-'));