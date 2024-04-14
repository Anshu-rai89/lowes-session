




// const promiseAdd = new Promise((resolve, reject) => {
//     function add(a, b) {
//       return a + b;
//     }
//     var res = add(1,3);
//     resolve(res);
// })

// promiseAdd.then(data=> {console.log(data)});

// Asyn function internally creates a promise and returns a promise always 


async function add(a, b) {
    return a+b;
}

async function runCode() {
    console.log("Inside run code");
    var c = await add(2, 4);
    
    console.log("C", c);
}

runCode();

console.log("Heyy");




