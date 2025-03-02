//1. Basic Event Loop with setTimeout
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

//2. Microtasks vs Macrotasks (Promise vs setTimeout)
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");


//3. Nested setTimeout Calls
console.log("1");

setTimeout(() => {
  console.log("2");
  setTimeout(() => {
    console.log("3");
  }, 0);
}, 0);

console.log("4");


//4.Event Loop with Multiple setTimeout(0) Calls

setTimeout(() => console.log("A"), 0);
setTimeout(() => console.log("B"), 0);

console.log("C");

Promise.resolve().then(() => console.log("D"));

console.log("E");


//5. async/await and Event Loop
async function foo() {
    console.log("Start");
    await Promise.resolve();
    console.log("End");
  }
  
  console.log("Outside");
  
  foo();
  
  console.log("After foo");
  
