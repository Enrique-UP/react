const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Home Page</h1>");
        res.end();
    }
    if(req.url === "/about"){
        res.setHeader("Content-Type", "text/plain");
        res.write("About Pages");
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});