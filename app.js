const http = require("http");

const routes = {
    "/": "Welcome to our homepage",
    "/about": "Welcome to our about page"
};

const server = http.createServer((req, res) => {
    const responseText = routes[req.url] || "404 Error!!!";
    res.end(responseText);
});

server.listen(5000);
