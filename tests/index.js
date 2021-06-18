const assert = require("assert");
console.log(process.env.NODE_ENV)
const myModule = process.env.NODE_ENV == "debug" ? require("../index-debug") : require("../index")
console.log(myModule.add(1, 2))
console.log("ok");