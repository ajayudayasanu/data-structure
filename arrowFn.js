const arr= [1,2,3,4,5]

// here arrow function make sense
const double = arr.map(num=> num*2)

console.log('double', double)
console.log('arr', arr)


const btn= document.getElementById("btn")
// in this example regular function make sense
btn.addEventListener("click", function(){
    btn.innerHTML="clicked"
})