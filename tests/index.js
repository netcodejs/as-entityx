const assert = require("assert");
const myModule = 
process.env.NODE_ENV && (process.env.NODE_ENV.trim() == "debug") ? 
    require("../index-debug") : 
    require("../index")
console.log(myModule.add(1, 2))