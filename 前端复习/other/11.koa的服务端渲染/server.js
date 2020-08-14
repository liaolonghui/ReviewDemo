const Koa = require("koa");
const ejs = require("koa-ejs");
const path = require("path");

let server = new Koa();
server.listen(80);

ejs(server,{
  root: path.resolve(__dirname,'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
});

server.use(async ctx=>{
  await ctx.render('1',{
    arr: [21,55,64,12]
  });
});
