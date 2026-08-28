const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");

const emitter = new EventEmitter();
const filePath = path.join(__dirname, "eventCounts.json");

// Load existing counts from file, or use default zeros if the file doesn't exist yet
let eventCounts = {
    "user-login": 0,
    "user-purchase": 0,
    "user-update": 0,
    "user-logout": 0
};

if (fs.existsSync(filePath)) {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        eventCounts = JSON.parse(data);
    } catch (err) {
        console.error("Error reading event counts file:", err);
    }
}

// Helper function to save counts back to the file
function saveCounts() {
    fs.writeFileSync(filePath, JSON.stringify(eventCounts, null, 2), "utf8");
}

emitter.on("user-login", (username) => {
    eventCounts["user-login"]++;
    saveCounts();
    console.log(`${username} logged in!`);
});

emitter.on("user-purchase", (username, item) => {
    eventCounts["user-purchase"]++;
    saveCounts();
    console.log(`${username} purchased ${item}`);
});

emitter.on("user-update", (username, field) => {
    eventCounts["user-update"]++;
    saveCounts();
    console.log(`${username} updated their ${field}`);
});

emitter.on("user-logout", (username) => {
    eventCounts["user-logout"]++;
    saveCounts();
    console.log(`${username} logged out!`);
});

emitter.on("summary", () => {
    console.log(eventCounts);
});

emitter.emit("user-login", "Enrique");
emitter.emit("user-purchase", "Enrique", "Laptop");
emitter.emit("user-update", "Enrique", "email");
emitter.emit("user-logout", "Enrique");
emitter.emit("summary");