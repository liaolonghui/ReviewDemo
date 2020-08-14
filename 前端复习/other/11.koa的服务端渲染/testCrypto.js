const crypto = require("crypto");

let obj = crypto.createHash('md5');
obj.upload('123456');  //upload()可以多次调用
console.log(obj.digest('hex')); 
