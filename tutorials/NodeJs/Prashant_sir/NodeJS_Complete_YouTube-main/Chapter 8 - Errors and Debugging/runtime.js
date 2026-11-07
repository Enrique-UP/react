// const runtime = () => {
//   // console.log(x);
//   let num = 98;
//   num();
// };

const runtime = () => {
    let nums = () => {
        console.log("Main ek function hoon");
    };
    nums();
};
//runtime();

module.exports = runtime;