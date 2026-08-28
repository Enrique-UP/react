// https://nodejs.org/docs/latest/api/os.html

const os = require("os");
console.log("Platform = ", os.platform());
console.log("User = ", os.userInfo());
console.log("CPU Architecture = ", os.arch());
console.log("Free Memory = ", os.freemem(), "bytes");
console.log("Total Memory = ", os.totalmem(), "bytes");