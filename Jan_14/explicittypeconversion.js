console.log(Boolean("")); //false
console.log(String(123)); // 123 (string)

console.log(Number("123")); // 123
console.log(Number("abcd")); // NaN
console.log(Number("0xa")); //10 (Hexdecimal coversion)

let x = NaN;
console.log(x === NaN); //false
console.log(isNaN(x)); // true

console.log(isNaN("sanket")); // true //isNaN converts the incoming input to a number (ToNumber)

console.log(Number.isNaN("sanket")); //false(doesn't do coercion)
console.log(Number.isNaN(x)); //true

if(typeof(x) === 'number' && x !== x){
    console.log(true);
} // true
