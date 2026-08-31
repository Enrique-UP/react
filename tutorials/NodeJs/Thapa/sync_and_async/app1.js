const fs = require("fs");

// Synchronous task
console.log("start");

// Synchronous task
const data = fs.readFileSync("file.txt", "utf-8");
console.log("sync", data);

// Asynchronous task
fs.readFile("file.txt", "utf-8", (err, data1) => {
    if(err) throw err;
    console.log("async", data1);
});

// Synchronous task
console.log("end");


// Synchronous Code
    // Tasks are executed sequentially.
    // Each task blocks the next until completed.
    // V8 (Javascrit Engine converts code in machine language)
// Asynchronous Code
    // Tasks don't block execution.
    // Uses callbacks, promises, or async/await.
    // Libuv