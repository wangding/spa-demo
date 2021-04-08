const q = document.querySelector,
      $ = q.bind(document);

let $btnEnabled  = $('#enabled-button'),     // Enabled 按钮
    $btnDisabled = $('#disabled-button'),    // Disabled 按钮
    $btnPlay     = $('#play-button'),        // 图片按钮
    $btnRound    = $('#round-button'),       // 圆角按钮
    timer        = 0,                        // 定时器
    i;                                       // 计数器

init();

function init() {
  i = 9;
  $btnDisabled.value = '同意 (' + i + ' s)';
  $btnDisabled.setAttribute('disabled', 'disabled');
  $('#status').innerText = '无';

  if(timer !== 0) return;

  timer = setInterval(() => {
    $btnDisabled.value = '同意 (' + i-- + ' s)';
    if(i === -1) {
      clearInterval(timer);
      timer = 0;
      $btnDisabled.value = '同意';
      $btnDisabled.removeAttribute('disabled');
    }
  }, 1000);
}

$btnEnabled.onclick = () => alert('就知道你会点我！');

$btnDisabled.onclick = () => alert('你终于同意了！');

$btnPlay.onclick = () => $('#status').innerText = '播放';

$('#pause-button').onclick = () => $('#status').innerText = '暂停';

$('#stop-button').onclick = () => $('#status').innerText = '关闭';

$btnRound.onclick = init;
