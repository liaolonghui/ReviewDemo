//koa-static的正式使用演示
const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");

let server = new Koa();
server.listen(80);

let staticRouter = new Router();
staticRouter.all(/(\.jpg|\.png|\.gif)$/i,static('./',{
    maxage: 60*84600*1000,
}));
staticRouter.all(/(\.css)$/i,static('./',{
    maxage: 86400*1000,
  })
);
staticRouter.all(/(\.html)$/i,static('./',{
    maxage: 20*86400*1000,
}));
staticRouter.all("",static('./',{
    maxage: 30*86400*1000,
}));

server.use(staticRouter.routes());
