var $enabledBtn,       // Enabled 按钮 
    $disabledBtn,      //Disabled 按钮
    $imgBtn,            //图片按钮
    $cirBtn;           // 圆角按钮

$(function() {
  $enabledBtn = $('#enabledBtn');
  console.log($enabledBtn);
  $disabledBtn = $('#disabledBtn');
  $imgBtn = $('#imgBtn');
  $cirBtn = $('#cirBtn');
  
  // Enabled 按钮的JS
  $enabledBtn.click(function() {
    alert('这是一个可以正常执行的按钮');
  });

// Disabled 按钮的JS
  count(6);
  function count(i){
    var timer=setInterval(function(){
      i--;
      var str = '同意（'+i+')';
      if(i==0){
        clearInterval(timer);
        $disabledBtn.attr('value','同意');
        $disabledBtn.attr('class','');
        $disabledBtn.on('click',function(){
          alert('您已选择同意！')
        })
      }else{
        $disabledBtn.attr('value',str);
      }
    },1000)
  }

  // 图片按钮的JS
  $imgBtn.click(function(){
    $('#txt').text('目前状态：播放');
  })
  $('#imgBtn2').click(function(){
    $('#txt').text('目前状态：暂停');
  })
  $('#imgBtn3').click(function(){
    $('#txt').text('目前状态：关闭');
  })
// 圆角按钮的JS
  $cirBtn.click(function(){
    $disabledBtn.attr('class','dis');
    $disabledBtn.off('click')
    count(6);
    $('#txt').text('目前状态：初始化');
  })
});

