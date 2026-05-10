// =======================================
// FUNCTIONS IN JAVASCRIPT - ALL IN ONE
// =======================================

// ---------------------------------------
// 1. Function Declaration
// ---------------------------------------
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ritesh"));


// ---------------------------------------
// 2. Function Expression
// ---------------------------------------
const add = function(a, b) {
  return a + b;
};

console.log("Addition:", add(10, 5));


// ---------------------------------------
// 3. Arrow Function
// ---------------------------------------
const multiply = (a, b) => {
  return a * b;
};

console.log("Multiplication:", multiply(4, 5));


// ---------------------------------------
// 4. Anonymous Function
// ---------------------------------------
setTimeout(function() {
  console.log("This is Anonymous Function");
}, 1000);


// ---------------------------------------
// 5. IIFE (Immediately Invoked Function)
// ---------------------------------------
(function() {
  console.log("IIFE Function Executed");
})();


// ---------------------------------------
// 6. Function with Default Parameter
// ---------------------------------------
function loginUser(username = "Guest") {
  return username + " logged in";
}

console.log(loginUser());
console.log(loginUser("Ritesh"));


// ---------------------------------------
// 7. Function Returning Value
// ---------------------------------------
function square(num) {
  return num * num;
}

const result = square(6);
console.log("Square:", result);


// ---------------------------------------
// 8. Function Inside Object
// ---------------------------------------
const user = {
  name: "Ritesh",
  
  welcomeMessage: function() {
    console.log("Welcome " + this.name);
  }
};

user.welcomeMessage();


// ---------------------------------------
// 9. Callback Function
// ---------------------------------------
function processUser(callback) {
  callback();
}

processUser(function() {
  console.log("Callback Function Executed");
});


// ---------------------------------------
// 10. Rest Parameter Function
// ---------------------------------------
function calculateCartPrice(...prices) {
  let total = 0;

  for(let price of prices) {
    total += price;
  }

  return total;
}

console.log("Total Price:", calculateCartPrice(100, 200, 300));


// ---------------------------------------
// 11. Nested Function
// ---------------------------------------
function outerFunction() {

  function innerFunction() {
    console.log("Inner Function Called");
  }

  innerFunction();
}

outerFunction();


// ---------------------------------------
// 12. Recursive Function
// ---------------------------------------
function countdown(n) {

  if(n === 0) {
    console.log("Finished");
    return;
  }

  console.log(n);

  countdown(n - 1);
}

countdown(5);


// =======================================
// END
// =======================================