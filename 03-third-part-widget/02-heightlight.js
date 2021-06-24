$(() => {
  /* global Behave hljs: true */
  let editor = new Behave({
    textarea: $('.main textarea').get(0),
    replaceTab: true,
    softTabs: true,
    tabSize: 2,
    autoOpen: true,
    overwrite: true,
    autoStrip: true,
    autoIndent: true,
    fence: false
  });

  $('input[type="button"]').click(() => {
    let $code = $(''
        + '<div>'
          + '<pre class="javascript">'
          + '</pre>'
          + '<i class="iconfont icon-clipboard" title="复制到剪贴板"></i>'
          + '<i class="iconfont icon-delete" title="删除"></i>'
        + '</div>'),
        $txt  = $('.main textarea');

    if($txt.val() !== '') {
      $code.find('pre').html($txt.val());
      hljs.highlightBlock($code.find('pre').get(0));
      $('.main').append($code);
    }

    let $del = $code.find('i.icon-delete'),
        $copy = $code.find('i.icon-clipboard');

    $del.click(() => $code.remove());

    $copy.click(() => {
      let $content = $code.find('pre');

      let range = document.createRange();
      range.selectNode($content[0]);
      window.getSelection().addRange(range);

      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    });
  });

  return editor;
});
