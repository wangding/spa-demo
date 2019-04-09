/* exported $timerButton */
var $timerButton = (function() {
  var init;
  var $btn, 
      i = 9,
      html = '<input class="timer-button" type="button" value="同意">',
      timer;

  init = function(config) {
    i = config.timer;
    $(config.container).html(html);
    $btn = $('input[type="button"]');
    $btn.val(config.text + ' (' + i + ' s)');
    $btn.attr('disabled', 'disabled');

    timer = window.setInterval(function() {
      $btn.val(config.text + ' (' + i-- + ' s)');
      if(i === -1) {
        window.clearInterval(timer);
        $btn.val(config.text);
        $btn.removeAttr('disabled');
      }
    }, 1000);
    
    $btn.click(function() {
      config.eventcb();
    });
  };

  return {'init': init};
}());
