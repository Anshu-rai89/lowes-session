const jsonData = [
  {
    name: "Anshu",
    email: "abc@gmail.com",
    id: 1,
  },
  {
    name: "Anshu",
    email: "abc@gmail.com",
    id: 1,
  },
  {
    name: "Anshu",
    email: "abc@gmail.com",
    id: 1,
  },
];

const jsonString = JSON.stringify(jsonData);
console.log("JSON Data", jsonData);
console.log("JSON String type", typeof jsonString);
console.log("JSON String", jsonString);

const parseJsonData = JSON.parse(jsonSting);
console.log("Parse json type ", typeof parseJsonData);
console.log("Parse json", parseJsonData);