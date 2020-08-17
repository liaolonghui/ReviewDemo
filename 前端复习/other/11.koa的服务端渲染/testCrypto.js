const crypto = require("crypto");

let obj = crypto.createHash('md5');
obj.update('123456');  //update()可以多次调用
console.log(obj.digest('hex'));
