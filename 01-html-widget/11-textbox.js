const q = document.querySelector,
      $ = q.bind(document);

$('#ok-button').onclick = () => {
  let msg = '';

  msg += '姓名：' + $('#name').value  + '\n';
  msg += '学历：' + $('#study').value + '\n';
  msg += '生日：' + $('#birth').value + '\n';
  msg += '手机：' + $('#tell').value  + '\n';
  msg += '邮箱：' + $('#email').value + '\n';
  msg += '网址：' + $('#url').value   + '\n';
  msg += '简介：' + $('textarea').value;

  alert(msg);
};
