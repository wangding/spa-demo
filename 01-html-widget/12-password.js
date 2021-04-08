const q = document.querySelector,
      $ = q.bind(document);

let $pwd     = $('#pwd-normal'),
    $pwdText = $('#pwd-display'),
    $btnTest = $('#test-button');

$pwd.oninput = () => $pwdText.value = $pwd.value;

$btnTest.onclick = () => {
  let msg, pwd = $pwd.value;

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
};
