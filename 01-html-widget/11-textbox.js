$(function(){
  $('#ok-button').click(function(){
    var msg = '';

    msg += '姓名：' + $('#name').val() + '\n';
    msg += '学历：' + $('#study').val() + '\n';
    msg += '生日：' + $('#birth').val() + '\n';
    msg += '手机：' + $('#tell').val() + '\n';
    msg += '邮箱：' + $('#email').val() + '\n';
    msg += '网址：' + $('#url').val() + '\n';
    msg += '简介：' + $('textarea').val();

    alert(msg);
  });
});
