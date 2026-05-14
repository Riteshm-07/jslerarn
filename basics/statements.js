// ===============================
// IF ELSE in JavaScript Examples
// ===============================

// 1. Simple if else
let age = 18;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


// 2. if else if ladder
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// 3. Check even or odd
let number = 7;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}


// 4. Positive, Negative or Zero
let num = -5;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// 5. Login Example
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome User");
} else {
    console.log("Please Login");
}


// 6. Nested if
let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login Successful");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Wrong Username");
}