const q = document.querySelector,
      $ = q.bind(document);

let $btn = $('input[type="button"]'),
    i    = 9,
    timer;

$btn.value = '同意 (' + i + ' s)';
$btn.setAttribute('disabled', 'disabled');

timer = setInterval(() => {
  $btn.value = '同意 (' + i-- + ' s)';
  if(i === -1) {
    clearInterval(timer);
    $btn.value = '同意';
    $btn.removeAttribute('disabled');
  }
}, 1000);

$btn.onclick = () => alert('就知道你会同意的！');
