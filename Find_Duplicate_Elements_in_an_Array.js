// Using Nested Loops (Brute Force)
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 2, 5, 6, 3])); // Output: [2, 3]

//Using a Hash Map (Efficient)
function findDuplicates(arr) {
    let map = {};
    let duplicates = [];

    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let key in map) {
        if (map[key] > 1) {
            duplicates.push(Number(key));
        }
    }
    
    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 2, 5, 6, 3])); // Output: [2, 3]

// Using a Set
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();
    for (let num of arr) {
      if (seen.has(num)) {
        duplicates.add(num);
      } else {
        seen.add(num);
      }
    }
    return [...duplicates];
  }
  
  console.log(findDuplicates([1, 2, 3, 4, 2, 3, 5])); // [2, 3]
  
  
//   Using Array filter() and indexOf()
  function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index && arr.lastIndexOf(item) === index);
}

console.log(findDuplicates([1, 2, 3, 4, 2, 5, 6, 3])); // Output: [2, 3]
