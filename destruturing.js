const user={
    name: "abc",
    age: 20,
    address: {
        street: "abc street",
        city: "bangalore"
    }
}

const {name, address:{street}}= user;

console.log(name, street)

// how to avoid program break during destruturing when the object is null
const user1=null
const {username, address}={...user}
const {cityStreet}= {...address}

console.log(username, cityStreet)