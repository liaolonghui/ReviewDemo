const fs = require("fs");
let rs = fs.createReadStream("1.txt");
let ws = fs.createWriteStream("2.txt");
rs.pipe(ws);  //pipe()是可读流的方法
rs.on("error",err=>{
  console.log(err);
});
ws.on("finish",()=>{
  console.log("完成");
});
