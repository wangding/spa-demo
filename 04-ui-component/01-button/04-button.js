var $btn, 
    i = 9,
    html = '<input type="button" value="同意">',
    timer;

$(function() {
  $('div.box').html(html);
  $btn = $('input[type="button"]');
  $btn.val('同意 (' + i + ' s)');
  $btn.attr('disabled', 'disabled');
  $btn.css({
    'width': '130px',
    'height': '70px',
    'font-size': '1.3em'
  });
  
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
