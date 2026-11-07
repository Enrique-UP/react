// 1. Callbacks (traditional)
function fetchData(callback) {
    setTimeout(() => {
        callback('Data received!');
    }, 1000);
}fetchData((data) => {
    console.log(data);
    console.log('----------------------------------');
});

// 2. Promises (ES6+)
const fetchDataPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Promise resolved!'), 1000);
    });
};

// 3. Async/Await (ES8+)
async function getData() {
    const result = await fetchDataPromise();
    console.log(result);
}

getData(); // Call the async function

// Promise resolved!