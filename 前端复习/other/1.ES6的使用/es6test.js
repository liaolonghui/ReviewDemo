  //1.let与const定义变量以及块级作用域
  let index = 0;  //let与const声明变量是禁止重复声明，可以限制修改，支持块级作用域
  const llh = "帅";

  //llh = "帅炸了"; const不允许修改
  //let index = 1; let与const都不允许重复声明
  //const llh = 1;

  while(index<1){
    index++;
    let wbj = 0;
    console.log("wbj:"+wbj+",index:"+index);
  }
  //console.log(wbj); 在外面无法使用wbj
  console.log("index:"+index);


  //2.解构赋值
  let obj = {
    name: "wbj",
    age: 18
  };
  let {name,age} = obj;
  console.log(name+"今年"+age+"岁");

  //3.箭头函数   可以让this牢牢地绑定在当前对象上
  // let fun1 = (a,b)=>{
  //   let sum = a+b;
  //   if(!isNaN(sum)){
  //     confirm("两值相加等于"+sum);
  //   }else{
  //     alert("请输入正确的数字");
  //     let a = parseFloat(prompt("计算两数相加，请先输入第一个值。"));
  //     let b = parseFloat(prompt("请输入第二个值。"));
  //     fun1(a,b);
  //   }
  // }
  // let a = parseFloat(prompt("计算两数相加，请先输入第一个值。"));
  // let b = parseFloat(prompt("请输入第二个值。"));
  // fun1(a,b);


  //4.参数展开   ...
  let fun2 = (a,b,...arr)=>{
    console.log("前两个参数是"+a+"和"+b);
    console.log("除了前两个外的其余参数="+arr);
  }
  fun2(1,2,3,9,8,7,6,5,4);

  let arr1 = [1,2,3];
  let arr2 = [4,5,6];
  let arr = [...arr1,...arr2];
  console.log(arr);


  //5.系统对象以及字符串模板
  let res1 = arr.map(function(item){
    return item>3;
  });
  console.log(res1);

  //结合字符串模板使用
  arr.forEach( (item,index) => {
    console.log(`第${index+1}个是${item}`);
  });

  let res2 = arr.filter(item=>item%2 == 0);
  console.log(`${arr}中的偶数有${res2}`);

  let res3 = arr.reduce((temp,item,index)=>{
    return temp + item;
  });
  console.log(arr+"相加等于"+res3);
  let res4 = arr.reduce((temp,item,index)=>{
    if(index<arr.length-1){
      return temp + item;
    }else{
      return (temp + item)/arr.length;
    }
  });
  console.log(arr+"的平均值是"+res4);


  //6.补充一些JSON知识点
  let json = {"key1":"aaa","key2":"bbb"};
  let string = JSON.stringify(json);
  console.log(string);
  console.log(JSON.parse(string));
  //JSON.stringify()将json对象转化为字符串，JSON.parse()将字符串转化为JSON对象
