
// // 1️ What will be the output of the following code? Explain why.
let x = "5";
let y = 5;
console.log(x == y); 
console.log(x === y);

// OUTPUT:
// true : THE VALUE OF X AND Y IS EQUALL
// FALSE : THE DATA TYPE OF X AND Y IS NOT EQUALL


// 2) Longest word in the array
function longestWordLength(words) {
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

const words = ["JavaScript", "Programming", "Function", "Hoisting"];
console.log(longestWordLength(words)); 
// Output: 11


// 3️) What will be logged in the console? Explain your answer.
//function testScope() {
  //  if (true) {
    //var a = 10;
//    let b = 20;
  //  const c = 30;
    //}
//    console.log(a);
  //  console.log(b);
    //console.log(c);
//   }
  // testScope();
// ANS: 10
//      ReferenceError: b is not defined
//      var has function scope SO it Is accessible anywhere inside the function
//      let and const have block scope SO they are only accessible within the block. that is why error will come


//4
const name = "John"; 

function greet() {
     if (true) {
        const message = "Hello " + name;
        console.log(message); 
    }
}

greet();

//5
const multiply = (a, b) => a * b;

//6
const obj = {
    name: "Alice",
    sayHello: function() {
    setTimeout(() => {
    console.log("Hello, " + this.name);
    }, 1000);
    }
   };
obj.sayHello();
// ans: Hello, Alice


// 7)
console.log(a);
var a = 10;
console.log(b);
let b = 20;

// ans:undefined --[because var a is hoisted but not assigned a value yet]
// ReferenceError  --[because not declared before console.log]


//8
console.log(square(5)); // Works fine (25)
function square(n) {
    return n * n;
}

var double = function(n) {
    return n * 2;
};

console.log(double(4)); 
// Declaring var double before using in console.log



// 9)
console.log(5 + "5");
console.log(5 - "3");
console.log(5 * "2");
console.log("10" / 2);
console.log(10 % "3");
//55
//2
//10
//5
//1


// 10)
let X = 10;
X = X + 5;
X = X * 2;
X = X - 3;
X = X / 2;


//11)
console.log(5 > 3 && 10 < 20);  
console.log(5 > 3 || 10 > 20);   
console.log(!(5 > 3));           
//true. both the "5>3" and "10<20" conditions are true
//true. condition "5>3" is true, so the final answer is true as there is "||" in between
//false. "5>3" is true but "!(5>3)" is not true so ultimately it is false


// 12)
function sum(a, b, c = 5) {
    return a + b + c;
}
console.log(sum(2️, 3️));
console.log(sum(2️, 3️, 1️0));  
//10. 
//15. 


// 13)
const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);

console.log(sum(1, 2, 3, 4)); 
console.log(sum(5, 10, 15));  
console.log(sum());          
            





// 1)Reverse a number


// 2)Custom Length Function
function customLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}
console.log(customLength("JavaScript")); 
/

// 3)fixtures:
function add(a, b) {
    return a + b;
}

var Multiply = function(a, b) {
    return a * b;
};

console.log(add(2, 3));     // Output: 5
console.log(Multiply(2, 3)); // Output: 6



// 4)
function counter() {
    let count = 0;
    return function() {
        return ++count; // Increment count and return it
    };
}

const count = counter();
console.log(count()); // Output: 1
console.log(count()); // Output: 2
console.log(count()); // Output: 3
