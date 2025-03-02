//example-1  Hoisting with var

console.log(a);
var a = 10;

// example-2 Hoisting with let
console.log(b);
let b = 20;


//example -3 Hoisting with Function Declaration

console.log(foo());
function foo() {
  return "Hello";
}

// example - 4 Hoisting with Function Expression

console.log(bar());
var bar = function() {
  return "Hi";
};

// example -5 Hoisting with let and Temporal Dead Zone (TDZ)
console.log(x);
let x = 5;
console.log(x);


//example-6  Function Hoisting with var Variable Hoisting

console.log(hoistExample());
var hoistExample = function() {
  return "Hoisting Test";
};

//example -7 Hoisting with Class Declaration

const obj = new MyClass();

class MyClass {
  constructor() {
    this.name = "Test";
  }
}

console.log(obj.name);

// example-8 Hoisting with var Inside a Function

function test() {
    console.log(a);
    var a = 30;
    console.log(a);
  }
  
  test();
  
// example-9 Function Expression vs Function Declaration

sayHello();

function sayHello() {
  console.log("Hello!");
}

sayHi();
var sayHi = function() {
  console.log("Hi!");
};

// example-10 Function Hoisting inside a Block Scope
{
    console.log(hello());
    function hello() {
      return "Hello, World!";
    }
  }
  

