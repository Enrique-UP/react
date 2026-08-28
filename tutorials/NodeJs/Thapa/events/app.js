const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("greet", () => {
    console.log(`Node Js by Enrique.`);
});
emitter.emit("greet");


emitter.on("greet1", (name, prof) => {
    console.log(`Name is ${name} & Profession is ${prof}.`);
});
emitter.emit("greet1", "Brave", "CEO");


emitter.on("greet2", (arg) => {
    console.log(`Name is ${arg.name} & Profession is ${arg.prof}.`);
});
emitter.emit("greet2", {name:"Enrique", prof:"CEO"});