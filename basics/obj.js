// =======================================
// OBJECTS IN JAVASCRIPT (ALL IN ONE)
// =======================================

// Create Object
let person = {
    name: "Ritesh",
    age: 21,
    city: "Pune"
};

console.log("Original Object:");
console.log(person);


// =======================================
// Access Object Values
// =======================================

console.log("\nAccess Values:");

console.log(person.name);      // dot notation
console.log(person["age"]);    // bracket notation


// =======================================
// Change Object Value
// =======================================

person.city = "Mumbai";

console.log("\nAfter Changing Value:");
console.log(person);


// =======================================
// Add New Property
// =======================================

person.email = "ritesh@gmail.com";

console.log("\nAfter Adding Property:");
console.log(person);


// =======================================
// Delete Property
// =======================================

delete person.age;

console.log("\nAfter Delete:");
console.log(person);


// =======================================
// Object Length
// =======================================

console.log("\nObject Keys Length:");
console.log(Object.keys(person).length);


// =======================================
// Object.keys()
// =======================================

console.log("\nObject.keys():");
console.log(Object.keys(person));


// =======================================
// Object.values()
// =======================================

console.log("\nObject.values():");
console.log(Object.values(person));


// =======================================
// Object.entries()
// =======================================

console.log("\nObject.entries():");
console.log(Object.entries(person));


// =======================================
// Freeze Object
// =======================================

let user = {
    username: "Ritesh",
    id: 101
};

Object.freeze(user);

// user.username = "Sam"; // won't change

console.log("\nObject.freeze():");
console.log(user);


// =======================================
// Nested Objects
// =======================================

let student = {
    name: "Ritesh",
    
    marks: {
        math: 90,
        science: 85
    }
};

console.log("\nNested Object:");
console.log(student.marks.math);


// =======================================
// Array of Objects
// =======================================

let users = [
    {
        id: 1,
        name: "Ritesh"
    },
    {
        id: 2,
        name: "Rahul"
    }
];

console.log("\nArray of Objects:");
console.log(users[1].name);


// =======================================
// Object Methods
// =======================================

let car = {
    brand: "BMW",
    model: "X5",

    start: function() {
        console.log("Car Started");
    }
};

console.log("\nObject Method:");
car.start();


// =======================================
// this Keyword
// =======================================

let employee = {
    name: "Ritesh",
    salary: 50000,

    details: function() {
        console.log(this.name);
        console.log(this.salary);
    }
};

console.log("\nthis Keyword:");
employee.details();


// =======================================
// for...in Loop
// =======================================

console.log("\nfor...in Loop:");

for(let key in person) {
    console.log(key, ":", person[key]);
}


// =======================================
// Object Destructuring
// =======================================

let mobile = {
    brand: "Samsung",
    price: 25000
};

let {brand, price} = mobile;

console.log("\nDestructuring:");
console.log(brand);
console.log(price);


// =======================================
// Spread Operator
// =======================================

let obj1 = {
    a: 1,
    b: 2
};

let obj2 = {
    c: 3,
    d: 4
};

let merged = {
    ...obj1,
    ...obj2
};

console.log("\nSpread Operator:");
console.log(merged);


// =======================================
// Object.assign()
// =======================================

let target = {
    x: 10
};

let source = {
    y: 20
};

let result = Object.assign(target, source);

console.log("\nObject.assign():");
console.log(result);


// =======================================
// hasOwnProperty()
// =======================================

console.log("\nhasOwnProperty():");
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("salary"));


// =======================================
// Optional Chaining
// =======================================

let data = {
    user: {
        profile: {
            username: "Ritesh"
        }
    }
};

console.log("\nOptional Chaining:");
console.log(data.user?.profile?.username);


// =======================================
// Convert Object to JSON
// =======================================

let jsonData = JSON.stringify(person);

console.log("\nJSON.stringify():");
console.log(jsonData);


// =======================================
// Convert JSON to Object
// =======================================

let newObject = JSON.parse(jsonData);

console.log("\nJSON.parse():");
console.log(newObject);


// =======================================
// Constructor Function
// =======================================

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person("Ritesh", 21);

console.log("\nConstructor Function:");
console.log(p1);


// =======================================
// Class and Object
// =======================================

class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes sound");
    }
}

let dog = new Animal("Dog");

console.log("\nClass and Object:");
dog.speak();


// =======================================
// Object.seal()
// =======================================

let account = {
    username: "Ritesh",
    balance: 5000
};

Object.seal(account);

// account.newProp = "test"; // not allowed

account.balance = 10000;

console.log("\nObject.seal():");
console.log(account);


// =======================================
// Final Output
// =======================================

console.log("\n=== Objects Tutorial Completed ===");