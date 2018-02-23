$(function() {
  var $width = $('#rectangle-width');
  var $height = $('#rectangle-height');
  var $calc = $('#rectangle-calc');

  $calc.click(function() {
    var width = $width.val();
    var height = $height.val();

    var perimeter = width * 2 + height * 2;
    var area = width * height;

    $('#rectangle-perimeter').val(perimeter);
    $('#rectangle-area').val(area);
  });

  $width.focusout(function() {
    validate('#rectangle-width');
  });
  
  $height.focusout(function() {
    validate('#rectangle-height');
  });

  function validate(field) {
    var $data = $(field),
      $message = $(field + '-validate'),
      label = $(field).attr('data-label');

    if($data.val() === '') {
      $message.html(label + '不能为空！');
      $data.select();
      return;
    }

    if(!/^-?\d*\.?\d*$/.test($data.val())) {
      $message.html(label + '必须是数值');
      $data.select();
      return;
    }

    if(window.Number($data.val()) < 0) {
      $message.html(label + '必须大于零');
      $data.select();
      return;
    }

    $message.html('');
  }
});
