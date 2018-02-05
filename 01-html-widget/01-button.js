var $btnOk,       // 确定按钮 
    $btnReset;    // 重置按钮

$(function() {
  $btnOk = $('#btnOk');
  $btnReset = $('#btnReset');
  init();
  
  $btnOk.click(function() {
    var strMsg = '';

    strMsg += '姓名：' + $('#txtName').val() + '\n';
    strMsg += '性别：' + $('input[type="radio"][name="gender"]:checked').val() + '\n';
    
    var techs = $('input[type="checkbox"][name="tech"]:checked').map(function() {
      return $(this).val();
    }).toArray().join('，');

    strMsg += '技术特长：' + techs + '\n';

    alert(strMsg);
  });

  $btnReset.click(init);
    
  function init() {
    $('#txtName').val('王顶');
    $('input[type="radio"]').val(['男']);
    $('input[type="checkbox"]').val(['HTML', 'CSS', 'JavaScript']);
  }
});

