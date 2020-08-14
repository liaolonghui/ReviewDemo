//koa2的简单使用
const Koa = require("koa");
const Router = require("koa-router");

let server = new Koa();
server.listen(80,()=>{
  console.log("监听80端口");
  console.log("测试koa-router");
});

//建议将路由封装成一个模块
let router = new Router();
router.get("/",async ctx=>{
  ctx.body = 'aaaa';
});
  //user
  let userRouter = new Router();
  userRouter.get("/",async ctx=>{
    ctx.body = "用户模块";
  });
    let company = new Router();
    company.get("/",async ctx=>{
      ctx.body = "企业级用户模块";
    });
    company.get("/a",async ctx=>{
      ctx.body = "企业级用户的a";
    });
    let admin = new Router();
    admin.get("/",async ctx=>{
      ctx.body = "管理员模块"
    })
    admin.get("/a",async ctx=>{
      ctx.body = "管理员的a";
    });
    userRouter.use("/company",company.routes());
    userRouter.use("/admin",admin.routes());
  //news
  let newsRouter = new Router();
  newsRouter.get("/",async ctx=>{
    ctx.body = "新闻模块";
  });
    let sport = new Router();
    sport.get("/",async ctx=>{
      ctx.body = "体育新闻模块";
    });
    sport.get("/basketball",async ctx=>{
      ctx.body = "新闻中的体育类中的篮球类新闻";
    });
    let woman = new Router();
    woman.get("/",async ctx=>{
      ctx.body = "女性新闻模块";
    });
    woman.get("/skirt",async ctx=>{
      ctx.body = "新闻中的女性类中的裙子类新闻";
    });
    newsRouter.use("/sport",sport.routes());
    newsRouter.use("/woman",woman.routes());
router.use("/user",userRouter.routes());
router.use("/news",newsRouter.routes());

server.use(router.routes());
