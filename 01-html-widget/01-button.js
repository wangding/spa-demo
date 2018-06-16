$(function() {
  var $userName  = $('#user-name'),   // 姓名文本框
      $btnOk    = $('#ok-button'),    // 确定按钮 
      $btnReset = $('#reset-button'); // 重置按钮

  init();
  
  $btnOk.click(function() {
    var msg = '';

    msg += '姓名：' + $userName.val() + '\n';
    msg += '性别：' + $('input[type="radio"][name="gender"]:checked').val() + '\n';
    
    var techs = $('input[type="checkbox"][name="tech"]:checked').map(function() {
      return $(this).val();
    }).toArray().join('，');

    msg += '技术特长：' + techs + '\n';

    alert(msg);
  });

  $btnReset.click(init);
    
  function init() {
    $userName.val('王顶');
    $('input[type="radio"]').val(['男']);
    $('input[type="checkbox"]').val(['HTML', 'CSS', 'JavaScript']);
  }
});

