// function add (a, b) {
//     var c = a+b;

//     return c;
// }


// var res = add(10,23);
// console.log(res);

// // Function expression
// var b = function (a, b) { return a-b}; // Anonymous function 

// var res1 = b(40, 20);
// console.log(res1);


// Fat Arrow symbol
var c = a =>  a* 2;

console.log(c(10));

const arr = [1];
const arr2 = arr;

arr2.push(2);

console.log("Arr", arr);
console.log("Arr2", arr2);

// Spread operator
const arr3 = [...arr];

arr3.push(6);

console.log("Arr", arr);
console.log("Arr2", arr2);
console.log("Arr3", arr3);

const user1 = {
    name: "Ankit",
    email: "ankit@gmail.com"
}

const user2 = {...user1};

user2.email = "abc@gmail.com";

console.log("User2", user2);
console.log("User1", user1);

// Object destructuring 

const {name: userName , email: userEmail} = user1;

console.log("Name ", userName);
console.log("email ", userEmail);

const [x, y] = [1,2,3];
console.log("First", x);
console.log("Second", y);