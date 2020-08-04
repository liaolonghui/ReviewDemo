import * as mod1 from "./mod1";
import {a,b,c} from "./mod2";
import dd from "./mod2";
alert(mod1.a);

console.log(a);
console.log(b);
console.log(c);

alert("我是从mod2模块导入的默认成员:"+dd);
