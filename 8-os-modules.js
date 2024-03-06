const os = require("os") //operating system

//user info

const user = os.userInfo();
console.log(user);

//computer uptime
console.log(`Computer uptime is ${os.uptime()} seconds`);

//current Os

const currentOS = {

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);