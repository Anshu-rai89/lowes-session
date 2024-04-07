const arr1 = [];
console.log("ARR1", arr1);
console.log("Length", arr1.length);

const arr2 = ['NCERT', 'RDSHARMA', "HC Verma"];
console.log("ARR2", arr2);
console.log(arr2[1]);
console.log("Length", arr2.length);

const arr3 = ["Rahul", 12, 12.45, true, [1,2]];
console.log(arr3);

const arr = new Array(10);
console.log(arr);
console.log(arr.length);

const a11 = [10];


// You want to add a item in a11 at the end 
// [1]

a11.push(1,2);
console.log(a11);
console.log(a11.length);

// Delete from the end;
a11.pop();
console.log(a11);
console.log(a11.length);

// Add items from the fronted
a11.unshift(8,8.5);
console.log(a11);
console.log(a11.length);

// delete from the front
a11.shift();
console.log(a11);
console.log(a11.length);

// [8.5, 10, 1]
// Removing  & adding items from in between
a11.splice(1,1);
console.log(a11);
console.log(a11.length);

// [8.5, 11, 12, 1]

const a12 = [8.5, 10, 1];
a12.splice(2, 0, 11, 12);
console.log(a12);
console.log(a12.length);

const slice = a12.slice(1,3);
console.log(slice);
console.log(a12);

const isPresent = a12.includes(32);
console.log("isPresent", isPresent);

const string = a12.join(".");
console.log(string);

// Iterate on array 

for( let index = 0 ; index < a12.length; index++) {
    console.log("Item", a12[index]);
}

for( let index in a12) {
    console.log("value", a12[index]);
}

for (let value of a12) {
  console.log("value", value);
}

// function print(value, index) {
//     console.log(value, index);
// }

//a12.forEach(print);

a12.forEach(  (value, index) => {
    console.log(value, index)
})

const arrNos = [1,2,3,4];

// Return me an array which consist of squares of this numbers

var sqNos = [];

arrNos.forEach(  (value)=>  {
    const sq = value * value ;
    sqNos.push(sq);
})

console.log("Squares", sqNos);

const ans = arrNos.map( (value) => {
    return value * value
})

console.log("Ans", ans);

// from arrNos filter out all even number 
const evenNos = arrNos.filter(  (value)=>  {
    const isEven = value % 2 == 0 ;
    return isEven
})

console.log("Even nos", evenNos);

var newArr = ["Ankit", "Umang", "Balram", "Rohit", "Anshu", 'Chetan'];

// Sort this data in acending order
newArr.sort();
console.log(newArr);

var nos = [1,4,11,45,2,5,89, 22];


nos.sort( (a, b)=>  {
    return b-a;
});

console.log(nos);

