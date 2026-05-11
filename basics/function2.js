// =======================================
// ADVANCED FUNCTIONS IN JAVASCRIPT
// =======================================

// ---------------------------------------
// 1. Higher Order Function
// (Function accepting another function)
// ---------------------------------------

function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log("Higher Order Function:", operate(10, 5, add));


// ---------------------------------------
// 2. Callback Function
// ---------------------------------------

function fetchData(callback) {
  console.log("Fetching Data...");

  setTimeout(() => {
    callback("Data Loaded");
  }, 2000);
}

fetchData(function(data) {
  console.log(data);
});


// ---------------------------------------
// 3. Closure
// ---------------------------------------

function counter() {
  let count = 0;

  return function() {
    count++;
    console.log("Count:", count);
  };
}

const increment = counter();

increment();
increment();
increment();


// ---------------------------------------
// 4. Lexical Scope
// ---------------------------------------

function outer() {
  let username = "Ritesh";

  function inner() {
    console.log("Username:", username);
  }

  inner();
}

outer();


// ---------------------------------------
// 5. Function Hoisting
// ---------------------------------------

sayHello();

function sayHello() {
  console.log("Function Hoisting Works");
}


// ---------------------------------------
// 6. this Keyword
// ---------------------------------------

const student = {
  name: "Ritesh",

  showName: function() {
    console.log("Student Name:", this.name);
  }
};

student.showName();


// ---------------------------------------
// 7. Arrow Function and this
// ---------------------------------------

const obj = {
  name: "JavaScript",

  regularFunction: function() {
    console.log("Regular:", this.name);
  },

  arrowFunction: () => {
    console.log("Arrow:", this.name);
  }
};

obj.regularFunction();
obj.arrowFunction();


// ---------------------------------------
// 8. Immediately Returned Function
// ---------------------------------------

function greeting(message) {
  return function(name) {
    console.log(message + " " + name);
  };
}

const sayHi = greeting("Hi");

sayHi("Ritesh");


// ---------------------------------------
// 9. map() Function
// ---------------------------------------

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log("Map Result:", doubled);


// ---------------------------------------
// 10. filter() Function
// ---------------------------------------

const ages = [12, 18, 22, 15, 30];

const adults = ages.filter(age => age >= 18);

console.log("Adults:", adults);


// ---------------------------------------
// 11. reduce() Function
// ---------------------------------------

const prices = [100, 200, 300];

const total = prices.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("Total:", total);


// ---------------------------------------
// 12. forEach() Function
// ---------------------------------------

const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit, index) {
  console.log(index, fruit);
});


// ---------------------------------------
// 13. setInterval()
// ---------------------------------------

let count = 1;

const interval = setInterval(() => {
  console.log("Interval:", count);

  count++;

  if(count > 5) {
    clearInterval(interval);
  }

}, 1000);


// =======================================
// END
// =======================================