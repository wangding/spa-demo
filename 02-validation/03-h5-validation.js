$(function() {
  var $width = $('#rectangle-width');
  var $height = $('#rectangle-height');
  var $calc = $('#rectangle-calc');

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

  $('.rectangle form').submit(function(e) {
    e.preventDefault();         // 阻止表单提交

    var width = $width.val();
    var height = $height.val();

    $('#rectangle-perimeter').val(perimeter(width, height));
    $('#rectangle-area').val(area(width, height));
  });
});
