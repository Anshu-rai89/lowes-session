var s = "heyy";

console.log(typeof s);
console.log(s.length);
console.log("Char at",s.charAt(1));
console.log("Char at", s.charCodeAt(1));
console.log("Index", s[1]);

console.log("Start pattern",s.startsWith("hi"));
console.log("Start pattern", s.endsWith("z"));

console.log("Index of", s.lastIndexOf("y"));
console.log("Index of", s.lastIndexOf("ey"));

console.log("Includes ", s.includes("ey"));
console.log("Includes ", s.includes("ez"));

console.log("to uppers ", s.toUpperCase());
console.log("substring ", s.substring(1, 3));
console.log("slice ", s.slice(1,3));

var str = " Hey, i am, a string ";
console.log(str.split(","));

var resplacedString = str.replaceAll(" ", "");
console.log(resplacedString);

var trimmed = str.trim();
console.log("Original string", str);
console.log(trimmed);



