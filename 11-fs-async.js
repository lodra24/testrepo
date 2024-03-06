const {readFile, writeFile} = require("fs")

readFile("./content/first.txt", "utf8", (err, result)=>{
   
    if(err){

        console.log(err)
        return;
    }
    const first = result;
    console.log(first);

    readFile("./content/second.txt", "utf8", (err,result)=>{

        if(err){

            console.log(err)
            return;
        }
        const second = result;
        console.log(second);
        writeFile("./content/result-async.txt", 
        `Here is the result ${first} and ${second}`,(err,result)=>{
            if(err){

                console.log(err);
            }else{

                console.log(result)
            }
        })
    })

})





