$(function(){
  var $btnAddPwd = $('#add-password'),
    $btnGetPwd = $('#get-password'),
    pwdTextboxs = [];

  $btnAddPwd.click(function(){
    var pwd = new PasswordTextbox({'container': 'div.main'});
    pwdTextboxs.push(pwd);
    $btnGetPwd.removeAttr('disabled');
  });

  $btnGetPwd.click(function() {
    pwdTextboxs.forEach(function(pwd) {
      alert(pwd.getPwd());
    });
  });
});
