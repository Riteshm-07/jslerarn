// ======================================
// ALL TYPES OF LOOPS IN JAVASCRIPT
// ======================================

// ---------- 1. FOR LOOP ----------
console.log("FOR LOOP");

for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}


// ---------- 2. WHILE LOOP ----------
console.log("\nWHILE LOOP");

let a = 0;

while (a < 5) {
  console.log("a =", a);
  a++;
}


// ---------- 3. DO WHILE LOOP ----------
console.log("\nDO WHILE LOOP");

let b = 0;

do {
  console.log("b =", b);
  b++;
} while (b < 5);


// ---------- 4. FOR OF LOOP (ARRAY) ----------
console.log("\nFOR OF LOOP");

let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}


// ---------- 5. FOR IN LOOP (OBJECT) ----------
console.log("\nFOR IN LOOP");

let person = {
  name: "Ritesh",
  age: 21,
  city: "Pune"
};

for (let key in person) {
  console.log(key, ":", person[key]);
}


// ---------- 6. FOREACH LOOP ----------
console.log("\nFOREACH LOOP");

let numbers = [10, 20, 30];

numbers.forEach(function(num, index) {
  console.log("Index:", index, "Value:", num);
});


// ---------- 7. BREAK ----------
console.log("\nBREAK EXAMPLE");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}


// ---------- 8. CONTINUE ----------
console.log("\nCONTINUE EXAMPLE");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}


// ---------- 9. NESTED LOOP ----------
console.log("\nNESTED LOOP");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}


// ---------- 10. ARRAY LOOP WITH INDEX ----------
console.log("\nARRAY WITH INDEX");

let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(i, colors[i]);
}