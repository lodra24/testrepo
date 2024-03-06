const http = require("http")

const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    
    //res.write("Welcome to our homepage");
    res.end("Welcome to our homepage");

}

else if(req.url === "/about"){

    res.end("Welcome to our about")
}else {

    res.end("404 error!!!")
}
})
server.listen(5000);