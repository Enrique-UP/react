// https://nodejs.org/docs/latest/api/path.html

const path = require("path");
console.log("Start");
console.log(__dirname);
console.log("=======================");
console.log(__filename);
console.log("=======================");

// folder/students/data.txt
const filePath = path.join("folder", "students", "data.txt");
console.log("School Folder = " + filePath);
console.log("=======================");

const parsePath = path.parse(filePath);
const resolvePath = path.resolve(filePath);
const extnamePath = path.extname(filePath);
const basenamePath = path.basename(filePath);
const dirnamePath = path.dirname(filePath);

console.log(parsePath);
console.log(resolvePath);
console.log(extnamePath);
console.log(basenamePath);
console.log(dirnamePath);
console.log("=======================");
console.log({parsePath, resolvePath, extnamePath, basenamePath, dirnamePath});
