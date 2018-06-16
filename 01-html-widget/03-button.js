$(function() {
  var $btnEnabled  = $('#enabled-button'),     // Enabled 按钮 
      $btnDisabled = $('#disabled-button'),    // Disabled 按钮
      $btnPlay     = $('#play-button'),        // 图片按钮
      $btnRound    = $('#round-button'),       // 圆角按钮
      timer        = 0,                    // 定时器
      i;                                   // 计数器

  init();

  function init() {
    i = 9;
    $btnDisabled.val('同意 (' + i + ' s)');
    $btnDisabled.attr('disabled', 'disabled');
    $('#status').text('无');

    if(timer !== 0) return;

    timer = window.setInterval(function() {
      $btnDisabled.val('同意 (' + i-- + ' s)');
      if(i === -1) {
        window.clearInterval(timer);
        timer = 0;
        $btnDisabled.val('同意');
        $btnDisabled.removeAttr('disabled');
      }
    }, 1000);
  }

  $btnEnabled.click(function() {
    alert('就知道你会点我！');
  });

  $btnDisabled.click(function() {
    alert('你终于同意了！');
  });

  $btnPlay.click(function(){
    $('#status').text('播放');
  });

  $('#pause-button').click(function(){
    $('#status').text('暂停');
  });

  $('#stop-button').click(function(){
    $('#status').text('关闭');
  });

  $btnRound.click(init);
});

