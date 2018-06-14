$(function() {
  var $btnAlert   = $('#alert'),
      $btnPrompt  = $('#prompt'),
      $btnConfirm = $('#confirm'),
      $msg        = $('#msg');
  
  $btnAlert.click(function(){
    alert('JavaScript 是一门伟大的编程语言！');
  });

  $btnPrompt.click(function(){
    var id = prompt('请输入你的身份证号：');
    var msg = (id === '') ? '你的身份信息呢？' : '你的身份证号是：' + id;
    $msg.html(msg);
  });

  $btnConfirm.click(function(){
    var ans = confirm('你打算考研吗？');
    var msg = ans ? '研路漫漫，我来陪你!' : '去职场丰富经验吧!';
    $msg.html(msg);
  });
});
