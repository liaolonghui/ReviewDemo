//一些koa2的内容补充
const Koa = require("koa");
const Router = require("koa-router");

let server = new Koa();
server.listen(80,()=>{
  console.log("监听80端口");
});

//ctx.request   ctx.response
//ctx.request.accepts()判断文件类型
//ctx.response.type指定返回类型
//ctx.query   ctx.params   ctx.url   ctx.path   ctx.method   ctx.headers   ctx.status   ctx.body......
//方法如ctx.assert()   ctx.throw()   ctx.redirect()   ctx.attachment()
let router = new Router();
router.get("/news/:id",async (ctx,next)=>{     //动态路由参数
  let {id} = ctx.params;  //ctx.params获取动态路由参数。而ctx.query获取get参数数据。
  ctx.body = "新闻"+id;
  await next();
});
router.get("/news/128",async (ctx,next)=>{
  ctx.body += "128";     //当访问/news/128时会有两个128
  console.log(ctx.query);  //通过/news/128?xx=xxx的方式传参时用ctx.query获取参数
});

server.use(router.routes());
