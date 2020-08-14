//koa-better-body
const Koa = require('koa');
const path = require('path');
const convert = require("koa-convert");
const body = require('koa-better-body');

let server = new Koa();
server.listen(80,()=>{
  console.log("server is running");
});

server.use(convert(body({
  uploadDir: './static/upload'
})));
server.use(async ctx=>{
  console.log(ctx.request.body);
  console.log(ctx.request.fields);
  console.log(ctx.request.files);
  ctx.body = "上传成功";
});
