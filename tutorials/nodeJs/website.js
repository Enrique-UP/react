const fs = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    console.log(req.url);
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync("index.html");
        res.end(data.toString());
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end("<h1>This is AboutPage CodeWithHarry.</h1><p>Lorem ipsum dolor sit ameet.</p>");
    }
    else if(req.url == '/blog'){
        res.statusCode = 200;
        res.end("<h1>This is BlogPage CodeWithHarry.</h1><p>Lorem ipsum dolor sit ameet.</p>");
    }
    else{
        // res.harry(); // server will be crash after recomment this code because harry() is not a defined function
        res.statusCode = 404;
        res.end("<h1>Page is Not Found.</h1>");
    }
    
    
});
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
