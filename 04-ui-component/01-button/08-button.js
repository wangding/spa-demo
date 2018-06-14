/* exported TimerButton */
var TimerButton = function(config) {
  var $btn, 
      i = config.duration,
      html = '<input class="timer-button" type="button" value="">',
      enabled = config.enabled,
      timer;

  $(config.container).html(html);
  $btn = $(config.container + '>input.timer-button');

  ($btn.reset = function(enabledBtn) {
    enabled = (enabledBtn === undefined) ? enabled : enabledBtn;
    $btn.val(btnText());
    if(enabled) return;
    
    $btn.attr('disabled', 'disabled');

    timer = window.setInterval(function() {
      i--;
      $btn.val(btnText());
      if(i === 0) enableBtn();
    }, 1000);
  })();

  function enableBtn() {
    enabled = true;
    i = config.duration;
    window.clearInterval(timer);
    $btn.val(btnText());
    $btn.removeAttr('disabled');
  }

  function btnText() {
    return enabled ? config.text : config.text + ' (' + i + ' s)';
  }

  $btn.click(function() {
    $btn.trigger('timer-button-click');
  });

  return $btn;
};
