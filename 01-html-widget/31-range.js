var $range,    // range 控件
    $age;      // 年龄文本

$(function() {
  $range = $('#range');
  $age = $('#age');
  $age.html($range.val());
  
  $range.change(function() {
    $age.html($range.val());
  });
});

