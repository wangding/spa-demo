$(function() {
  setBtnTitle(getN());

  $('.main input').click(function() {
    setBtnTitle(getN() + 1);
    history.pushState(null, null, getURL());
  });

  $(window).on('popstate', function() {
    setBtnTitle(getN());
  });

  function getURL() {
    var url = window.location.origin + window.location.pathname;
    return url + '#!' + (getN() + 1);
  }

  function getN() {
    var url = window.location.href;
    return Number(url.match(/(\d*)$/)[0]);
  }

  function setBtnTitle(n) {
    $('.main input').val('被按了 ' + n + ' 次');
  }
});
