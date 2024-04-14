console.log("Hello");
var flag = true;

function printMessage(msg) {
    console.log(msg);
}

setTimeout(() =>{
 printMessage("CB after 1 second");
 flag = false;
} , 1000);


let count = 10;

// Sync code -> 10s
while (flag) {
  console.log(count);
}



function parseData(data, cb1, cb2) {
  const parsedData =  JSON.parse(data);
  cb1(parseData, cb2);
}

function renderData(data, cb) {
  console.log("Data is rendering", data);
  cb("Success");
}

function printCommitLog(msg) {
  console.log(msg);
}


// ParseData is a  callback
fetchData((data) => parseData(data, renderData, printCommitLog));