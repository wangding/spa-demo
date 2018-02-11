$(function(){
 
  setInterval(function(){   
    var msg = $('#pwNormal').val();
    $('#pwDisplay').val(msg);
  },50);

  $('#btnTest').click(function(){
    var msgNormal = $('#pwNormal').val();
    var info = '';
    var isLetter = /[a-z]/;
    var isNumber = /[0-9]/;
    
    if (msgNormal.length<6) {
      info = '你的密码长度少于六位，强度较弱！';
    }else if (isLetter.test(msgNormal) == false) {
      info = '你的密码只包含数字，强度较弱!';
    }else if (isNumber.test(msgNormal) == false){
      info = '你的密码只包含字母，强度较弱！'
    }else{
      info = '你的密码很强壮！'
    }
    alert(info);
  });
});
