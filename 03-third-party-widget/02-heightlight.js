$(function() {
  //hljs.initHighlightingOnLoad();

  $('input[type="button"]').click(function() {
    var $code = $('<div><pre><code class="javascript"></code></pre></div>'),
      $txt = $('.main textarea');

    if($txt.val() !== '') {
      $code.find('code').html($txt.val());
      hljs.highlightBlock($code.find('pre code').get(0));
      $('.main').append($code);
    }
  });
});
