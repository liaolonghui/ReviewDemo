/*
 * 动画函数
 * @param {Object}  obj           当前要操作的元素对象
 * @param {Object}  json          所有要修改的属性及属性值的json
 * @param {Object}  fn            回调函数
 */

 //多物体运动时要把定时器绑定在对应的物体上。
var speed = 0;
function startAnimation(obj, json, fn){
  clearInterval(obj.timer);

  obj.timer = setInterval(function(){
    var cur = 0;
    var flag = true;  //标杆 如果为truw说明所有的属性值都达到了目标值
    //for in 循环遍历json
    for(attr in json){
      switch (attr) {
        //判断传入的属性是否时opacity
        case 'opacity':
          //因为值(浮点型*100)不准，所以对小数位四舍五入round
          cur = Math.round(parseFloat(getStyle(obj, attr)*100));
          break;
        //scrollTop(注意scrollTop可以获取到小数部分)
        case 'scrollTop':
          cur = Math.ceil(obj.scrollTop);
          break;
        default:
          cur = parseInt(getStyle(obj, attr));
          break;
      }

      //speed
      speed = (json[attr] - cur)/10;
      speed = json[attr] > cur ? Math.ceil(speed) : Math.floor(speed);

      //边界处理（要考虑到同时运动的情况需要每个属性值都达到目标值）
      //只要有一个还没达到flag就为false
      if(json[attr] !== cur){
        flag = false;
      }

      var sum = cur + speed;
      switch (attr) {
        //判断传入的属性是否是opacity
        case 'opacity':
          obj.style[attr] = sum/100;
          obj.style['filter'] = "alpha(opacity="+sum+")";
          break;
        //scrollTop
        case 'scrollTop':
          obj.scrollTop = sum;
          break;
        default:
          obj.style[attr] = sum + 'px';
          break;
      }
    }

    //边界处理
    if(flag){
      clearInterval(obj.timer);
      //有没有传入fn?
      if(fn){
        fn();
      }
      return;
    }

  },30);
}

//获取元素的样式属性
function getStyle(obj, attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj, null)[attr];
  }
}
