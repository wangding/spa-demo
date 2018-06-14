var $btn, 
    i = 9,
    timer;

$(function() {
  /*
  var $container = $('div.box');
  $('<input type="button" value="同意">').appendTo($container);
  */
  
  var $button = $('<input type="button" value="同意">');
  $('div.box').append($button);

  $btn = $('input[type="button"]');
  $btn.val('同意 (' + i + ' s)');
  $btn.attr('disabled', 'disabled');
  
  timer = window.setInterval(function() {
    $btn.val('同意 (' + i-- + ' s)');
    if(i === -1) {
      window.clearInterval(timer);
      $btn.val('同意');
      $btn.removeAttr('disabled');
    }
  }, 1000);

  $btn.click(function() {
    alert('就知道你会同意的！');
  });
});
