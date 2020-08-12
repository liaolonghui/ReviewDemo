const http = require("http");
const path = require("path");
const fs = require("fs");
const zlib = require("zlib");

http.createServer((req,res)=>{
  let filepath = path.resolve(__dirname,"demo.jpg");
  fs.stat(filepath,(err,stat)=>{
    if(err){
      res.writeHead(404);
      res.end("not found");
    }else{
      let rs = fs.createReadStream(filepath);
      rs.on("error",err=>{
        console.log(err);
      });
      res.setHeader("content-encodeing","gzip");
      let gz = zlib.createGzip();
      rs.pipe(gz).pipe(res);
    }
  });
}).listen(80,()=>{
  console.log(80);
});
