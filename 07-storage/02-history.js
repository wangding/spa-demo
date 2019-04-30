$(function() {
  var $btn = $('.main input');

  var n = 0;

  setBtnTitle(n);

  $btn.click(function() {
    var url = location.origin + location.pathname + '#/' + (++n);

    history.pushState(null, null, url);
    setBtnTitle(n);
  });

  $(window).on('popstate', function() {
    n = (location.href).match(/(\d*)$/)[0];

    n = (n === '' ? 0 : n);
    setBtnTitle(n);
  });

  function setBtnTitle(n) {
    $btn.val('被按了 ' + n + ' 次');
  }
});
