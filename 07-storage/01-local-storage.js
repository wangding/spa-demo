$(function() {
  var n = localStorage.getItem('n') || 0;
  setBtnTitle(n);

  $('.main input').click(function() {
    localStorage.setItem('n', ++n);
    setBtnTitle(n);
  });

  function setBtnTitle(n) {
    $('.main input').val('被按了 ' + n + ' 次');
  }
});
