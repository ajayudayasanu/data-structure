// Using flat() (ES6+)
let arr = [1, [2, [3, [4]], 5]];

console.log(arr.flat(1)); // [1, 2, [3, [4]], 5]
console.log(arr.flat(2)); // [1, 2, 3, [4], 5]
console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5]

//Using Recursion
function flatten(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]


//Using reduce()
function flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}
console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]

//Using toString() and map()
function flatten(arr) {
    return arr.toString().split(',').map(Number);
}

console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
