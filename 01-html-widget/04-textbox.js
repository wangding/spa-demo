$(function(){
  $("#btn").click(function(){
    var msg='';
    msg = "姓名："+$("#name").val()+'\n'+"学历："+$("#study").val()+'\n'+"生日："+$("#birth").val()+'\n'+"手机："+$("#tell").val()+'\n'+"邮箱："+$("#email").val()+'\n'+"网址"+$("#url").val()+'\n'+"简介："+$("textarea").val();
    alert(msg);
  });
});

