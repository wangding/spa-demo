$(function(){
  var $pwd     = $('#pwd-normal'),
      $pwdText = $('#pwd-display'),
      $btnTest = $('#test-button');

  $pwd.keydown(function() {
    $pwdText.val($pwd.val());
  });

  $btnTest.click(function(){
    var msg, pwd = $pwd.val();
    
    if(pwd.length < 6) {
      msg = '你的密码长度少于六位，强度较弱！';
    } else if(/[a-zA-Z]/.test(pwd) == false) {
      msg = '你的密码只包含数字，强度较弱!';
    } else if(/\d/.test(pwd) == false){
      msg = '你的密码只包含字母，强度较弱！';
    } else {
      msg = '你的密码很强壮！';
    }

    alert(msg);
  });
});
