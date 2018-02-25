$(function() {
  var $width = $('#rectangle-width');
  var $height = $('#rectangle-height');
  var $calc = $('#rectangle-calc');

  $calc.click(function() {
    var width = $width.val();
    var height = $height.val();
    
    if(!validate('#rectangle-width') || !validate('#rectangle-height')) return;

    $('#rectangle-perimeter').val(perimeter(width, height));
    $('#rectangle-area').val(area(width, height));
  });

  function perimeter(x, y) {
    var lenX = (x.split('.').length === 2) ? x.split('.')[1].length : 0,
    lenY = (y.split('.').length === 2) ? y.split('.')[1].length : 0;

    var max = Math.max(lenX, lenY);
    return (x * (10 ** max) + y * (10 ** max)) * 2 / (10 ** max);
  }

  function area(x, y) {
    var lenX = (x.split('.').length === 2) ? x.split('.')[1].length : 0,
    lenY = (y.split('.').length === 2) ? y.split('.')[1].length : 0;

    var max = Math.max(lenX, lenY);
    return (x * (10 ** max)) * (y * (10 ** max)) / (10 ** (2 * max));
  }

  function validate(field) {
    var $data = $(field),
      $message = $(field + '-validate'),
      label = $(field).attr('data-label');

    if($data.val() === '') {
      $message.html(label + '不能为空！');
      $data.select();
      return false;
    }

    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
      $message.html(label + '必须是数值');
      $data.select();
      return false;
    }
    
    if(window.Number($data.val()) < 0) {
      $message.html(label + '必须大于零');
      $data.select();
      return false;
    }

    $message.html('');
    return true;
  }
});
