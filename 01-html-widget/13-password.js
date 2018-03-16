$(function(){
  var $pwd = $('#pwd'),
    $pwdText = $('.pwd-text'),
    $eye = $('#eye');

  $pwd.on('input', function(){
    $pwdText.val($pwd.val());
  });

  $eye.mouseover(function(){
    $eye.attr('src', 'images/eye.png');
    $pwdText.css('display', 'block');
  });

  $eye.mouseout(function(){
    $eye.attr('src', 'images/eye-close.png');
    $pwdText.css('display', 'none');
  });
});
