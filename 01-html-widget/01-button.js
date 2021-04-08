const q = document.querySelector,
      $ = q.bind(document),
      qa= document.querySelectorAll,
      $$= qa.bind(document);

let $userName  = $('#user-name'),    // 姓名文本框
    $btnOk     = $('#ok-button'),    // 确定按钮
    $btnReset  = $('#reset-button'); // 重置按钮

$btnOk.onclick = () => {
  let msg = '';

  msg += '姓名：' + $userName.value + '\n';
  msg += '性别：' + $('input[name="gender"]:checked').value + '\n';

  let nds = $$('input[name="tech"]:checked');
  nds = [...nds];

  msg += '技术特长：' + nds.map(function(n) { return n.value; }).join('，') + '\n';

  alert(msg);
};

$btnReset.onclick = () => {
  $userName.value = '';

  let nds = $$('input[type="radio"]');
  for(let n of nds) n.checked = false;

  nds = $$('input[type="checkbox"]');
  for(let n of nds) n.checked = false;
};
