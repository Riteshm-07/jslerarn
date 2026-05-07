// ===============================
// JavaScript Array Examples
// ===============================

// 1. Creating an Array
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);


// 2. Accessing Array Elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana


// 3. Adding Elements
fruits.push("Orange");      // Add at end
fruits.unshift("Grapes");  // Add at beginning

console.log(fruits);


// 4. Removing Elements
fruits.pop();      // Remove last
fruits.shift();    // Remove first

console.log(fruits);


// 5. Array Length
console.log(fruits.length);


// 6. Loop Through Array
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 7. forEach Method
fruits.forEach(function(item) {
    console.log(item);
});


// 8. Array of Numbers
let numbers = [10, 20, 30, 40, 50];

console.log(numbers);


// 9. map() Method
let doubled = numbers.map(num => num * 2);

console.log(doubled);


// 10. filter() Method
let greaterThan25 = numbers.filter(num => num > 25);

console.log(greaterThan25);


// 11. find() Method
let found = numbers.find(num => num === 30);

console.log(found);


// 12. includes() Method
console.log(numbers.includes(20)); // true


// 13. join() Method
console.log(fruits.join(" - "));


// 14. Reverse Array
console.log(numbers.reverse());


// 15. Sort Array
let marks = [40, 10, 90, 60];

marks.sort((a, b) => a - b);

console.log(marks);