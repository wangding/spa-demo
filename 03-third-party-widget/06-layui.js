layui.use(['jquery'], function() {
  var $ = layui.$;

  $(function() {
    var $form = $('.main form'),
      $msg = $('.main input[type="text"]');

    $form.submit(function(e) {
      e.preventDefault();

      var msg = $msg.val();
      layui.use(['layer'], function() {
        var layer = layui.layer;
        layer.msg(msg);
      });
    });
  });
});
