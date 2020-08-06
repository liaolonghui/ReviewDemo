const http = require("http");
const fs = require("fs");
const multiparty = require("multiparty");   //下载multiparty包并使用

http.createServer((req,res)=>{
  let form = new multiparty.Form({
    uploadDir: "./upload",
  });
  form.parse(req);
  form.on("field",(name,value)=>{
    console.log("字段：",name,value);
  });
  form.on("file",(name,file,...rest)=>{
    console.log("文件：",name,file);
  });
  form.on("close",()=>{
    console.log("表单解析完成");
  });
  form.on("error",(err)=>{

  });
  res.end("886");
}).listen(80,()=>{
  console.log("监听80端口");
})
