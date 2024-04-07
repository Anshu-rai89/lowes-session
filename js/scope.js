

var x = 100; // Scope of x is Global 
var y = 101;
function sum(a, b) {
    var c = a+b;  // Scope of c is function level

    if(true) {
         console.log("Inside function if block", c);
    }

    console.log("Inside function sum", c, x);

}

if(true) {
    let y = 90; // Global
    console.log("Inside Global if block", x, y);
}

sum(10,34);
console.log("I am at global scope ", x);
console.log("I am at global scope", y);