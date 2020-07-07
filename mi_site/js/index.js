window.onload = function(){
  let slider = document.getElementById('site_slider');
  let items = document.getElementsByClassName('ad_item');
  let mask = document.getElementById('mask');
  let item_index = mask.children;
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');
  let index = 0;
  let timer = null;

  prev.onclick = function(){
    startAnimation(items[index], {
      'opacity': 0
    });
    item_index[index].style.borderColor = 'rgba(255, 255, 255, .3)';
    index--;
    if(index === -1){
      index = 3;
    }
    startAnimation(items[index],{
      'opacity': 100
    });
    item_index[index].style.borderColor = '#ff6700';
  }
  next.onclick = function(){
    startAnimation(items[index], {
      'opacity': 0
    });
    item_index[index].style.borderColor = 'rgba(255, 255, 255, .3)';
    index++;
    if(index === 4){
      index = 0;
    }
    startAnimation(items[index],{
      'opacity': 100
    });
    item_index[index].style.borderColor = '#ff6700';
  }

  //自己动
  timer = setInterval(autoPlay,3000);
  function autoPlay(){
    startAnimation(items[index],{
      'opacity': 0
    });
    item_index[index].style.borderColor = 'rgb(255,255,255,0.3)';
    index++;
    if(index === 4){
      index = 0;
    }
    startAnimation(items[index],{
      'opacity': 100
    });
    item_index[index].style.borderColor = '#ff6700';
  }
  slider.onmouseover = function(){
    clearInterval(timer);
  }
  slider.onmouseout = function(){
    timer = setInterval(autoPlay,3000);
  }
}
