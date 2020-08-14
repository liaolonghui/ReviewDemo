//koa-static的简单使用
const Koa = require("koa");
const static = require("koa-static");

let server = new Koa();
server.listen(80,()=>{
  console.log(80);
});

server.use(static("./",{
  maxAge: 86400*1000,
  index: 'index.html'
}));
