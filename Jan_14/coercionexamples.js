let obj = {x: 10, y: 20};
let num = 10; 
console.log(`My object is ${obj}`); // My object is [object Object] // When you use template literals with an object in JavaScript, the default behavior is to convert the object to a string using its toString() method.
console.log("My object is"+obj); // My object is  [object Object]
console.log(`My object is ${num}`); // My object is 20
