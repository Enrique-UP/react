const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is CodeWithHarry.</h1><p>Lorem ipsum dolor sit ameet.</p>");
});
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// search on google statusCode
// 404 not found


// run on terminal
// node httpserver.js

// Check on browser
// http://localhost:3000


// goto inspect element => Network => check functions many. like pending etc.
// select the page name after that all property will be show in inspect element.