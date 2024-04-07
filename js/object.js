const obj = {};
const obj1 = new Object();


console.log("Object", obj, obj1);
console.log("check", obj == obj1);

const student = {name : "Ankit", "className": "x"};
console.log(
    "student",
    student
)

// I want to access the name of student

// Square notation
console.log("Student Name", student["name"]);

// Dot notation
console.log("Student Nae", student.name);
console.log("Student class", student.className);

// How can we dynamically define and use a key
var dynamicKey = "name";
console.log("Student dynamic key", student[dynamicKey]);


// How can we add a key value data on a object 

const obj2 = {};

console.log("Obj2", obj2);

obj2.email = "abc@gmail.com";
obj2.city = 'Delhi';
obj2["country"] = "India";
obj2.email = "newemail@gmail.com";

console.log("Obj2", obj2);


// How can we delete a key value data from object 

delete obj2.city;
delete obj2["city"]
console.log("Obj2 after delete", obj2);

const obj3 = {}


if (obj3) {
    console.log("Heyyy i am inside if")
}
else {
    console.log("I am in else");
}


// How to check for an empty object

// We can access all keys or values present in a object 

const obj3Values = Object.values(obj3);
console.log("Obj3 values", obj3Values);
console.log("Obj2 values", Object.values(obj2));
console.log("Obj2 keys", Object.keys(obj2));
console.log("Obj2 entries", Object.entries(obj2));

if(obj3Values.length == 0) {
    console.log("Heyyy object is empty");
}

// Print all keys and values of object 
const keys = Object.keys(obj2);

for(let key of keys) {
    console.log("key is", key);
    console.log("Value is", obj2[key]);;
}


// Nested objects 
// Key value your value is again a object

const user = {
  name: "Anshu",
  email: "abc@gmail.com",
  address: {
    city: "Delhi",
    country: "India",
  },
  signIn: function () {
    console.log("User signed in");
  },
  isAdmin: true,
  age: 24
};

user.signIn();
// Array of objects

const users = [
  {
    name: "Anshu",
    email: "abc@gmail.com",
    address: {
      city: "Delhi",
      country: "India",
    },

    signIn: function () {
        console.log("User signed in");
    }
  },
{

    name: "Anshu",
    email: "abc@gmail.com",
    address: {
      city: "Delhi",
      country: "India",
    },
  }
];


console.log("User city", user.address.city);

console.log("User country", user['address'].country);
console.log("User country", user.address["country"]);

user.address.street = "ABC";

delete user.address.street;



