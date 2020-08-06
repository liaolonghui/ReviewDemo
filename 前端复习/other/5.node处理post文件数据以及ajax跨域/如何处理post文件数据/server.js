//注意在http协议之中换行是\r\n
//要上传文件需要把enctype属性设置为multipart/form-data
const http = require("http");
http.createServer((req,res)=>{
  //模拟一个buffer数据
  let buffer = new Buffer("abc\r\n cdb\r\n db");

  function bufferSplit(buffer,delimiter){
    let arr = [];
    let n = 0;
    while( (n=buffer.indexOf(delimiter)) != -1 ){
      arr.push(buffer.slice(0,n));
      buffer = buffer.slice(n+delimiter.length);
    }
    arr.push(buffer);
    return arr;
  }
  let data = bufferSplit(buffer,"\r\n");
  let str = data.toString();
  console.log(str);

  res.setHeader("Content-type","text/html;charset=UTF-8");
  res.end("随便发点");

}).listen(80,()=>{
  console.log("监听80端口");
});
