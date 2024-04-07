function sum (a, b =10) {
    var res = a+ b;
    return res;
}


var res = sum(3,5);
console.log("Res",res);


var a = function (a, b) { return a+b}; // A function without a name is also called a anonymous function 

var res1 = a(3,4);
console.log("Res1", res1);


// Function as a a parameter

function multiply(a, b) {
    return a*b;
}

function subtract(a, b) {
  return a - b;
}

function compute(a,b,operation) {
    var res = operation(a,b);
    return res;
}

var res3 = compute(10,23, subtract)

// subtract  -> It is a callback function 
console.log("res3", res3);


function outer () {
    var count = 0;

    function inner () {
        count ++;
        console.log(count);
    }

    return inner;
}

var outPut = outer();
console.log("Outer", typeof outPut, outPut);

outPut();
outPut();

