const q = document.querySelector,
      $ = q.bind(document);

let $pwd     = $('#pwd'),
    $pwdText = $('.pwd-text'),
    $eye     = $('#eye');

$pwd.oninput = () => $pwdText.value = $pwd.value;
$eye.onmouseover = () => $pwdText.className = 'pwd-text up';
$eye.onmouseout = () => $pwdText.className = 'pwd-text down';
