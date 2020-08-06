//试一试assert模块与path模块
const assert = require("assert");
const path = require("path");


assert(5>3,"5大于3");//如果是false就会抛出错误

function add(a,b){
  return a+b;
}
let a = 5;
let b = 3;
let sum = add(a,b);
//equal()使用 == 相等运算符比较两个表达式
assert.equal(sum,8,"两数相加等于8");

//deepEqual方法用来比较两个对象。只要它们的属性一一对应，且值都相等，就认为两个对象相等，否则抛出一个错误。
let o1 = {"name":"wbj"};
let o2 = {"name":"wbj"};
assert.deepEqual(o1,o2,"两对象相等");


//deepStrictEqual() 使用严格相等运算符（===），比较两个表达式。
//......


//提取路径的各个部分
console.log(path.parse('./xxx/sss/base.js'));
console.log(path.dirname('./xxx/sss/base.js'));
console.log(path.extname('./xxx/sss/base.js'));
console.log(path.basename('./xxx/sss/base.js'));

//resolve()与join()     resolve()返回的是一个绝对路径，而join()返回的是多个参数拼接后的路径
console.log(path.resolve(__dirname,"./aaa/abc.py"));
console.log(path.join(__dirname,"./bbb/cba.py"));   //前两个输出一样   因为都是拼接

console.log(path.resolve(__dirname,"/aaa/abc.py"));  //这个因为第二个参数是以/开头，所以被认为是根目录进行处理
console.log(path.join(__dirname,"/bbb/cba.py"));   // 但join()仅仅是做了一个拼接处理
