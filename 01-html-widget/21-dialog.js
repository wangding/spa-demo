const q = document.querySelector,
      $ = q.bind(document);

let $btnAlert   = $('#alert'),
    $btnPrompt  = $('#prompt'),
    $btnConfirm = $('#confirm'),
    $msg        = $('#msg');

$btnAlert.onclick = () => alert('JavaScript 是一门伟大的编程语言！');

$btnPrompt.onclick = () => {
  let id = prompt('请输入你的身份证号：');
  let msg = (id === '' || id === null) ? '你的身份信息呢？' : '你的身份证号是：' + id;
  $msg.innerText = msg;
};

$btnConfirm.onclick = () => {
  let ans = confirm('你打算考研吗？');
  let msg = ans ? '研路漫漫，我来陪你!' : '去职场丰富经验吧!';
  $msg.innerText = msg;
};
