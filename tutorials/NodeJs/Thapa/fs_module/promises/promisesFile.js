// .then() and .catch()
// .then : ensures clear chaining of multiple asynchronous operations.
// .catch :  centralizes error handling, making it easy to debug and manage failures.

// const fs = require("fs/promises");
const fs = require("fs");
const path = require("path");

const file = __dirname;
console.log("__dirname => ", file);

fs.promises.readdir(file).then((data) => console.log(data)).catch((err) => console.error(err));
// fs.readdir(file).then((data) => console.log(data)).catch((err) => console.error(err));