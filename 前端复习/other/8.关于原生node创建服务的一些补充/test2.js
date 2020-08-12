const fs = require("fs");
const zlib = require("zlib");

let rs = fs.createReadStream("demo.jpg");
let gz = zlib.createGzip();  //gzip压缩
let ws = fs.createWriteStream("demo.jpg.gz");
rs.pipe(gz).pipe(ws);
rs.on("error",(err)=>{
  console.log(err);
});
ws.on("finish",()=>{
  console.log("完成");
});
