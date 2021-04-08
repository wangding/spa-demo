$(() => {
  let $width  = $('#rectangle-width'),
      $height = $('#rectangle-height'),
      $form   = $('.rectangle form');

  /**
   * 小数点后面保留第 n 位
   *
   * @param {number} x 做近似处理的数
   * @param {number} n 小数点后第 n 位
   * @returns {number} 近似处理后的数
   */
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }

  $form.submit((e) => {
    e.preventDefault();         // 阻止表单提交

    let width  = Number($width.val()),
        height = Number($height.val()),
        p      = roundFractional(width * 2 + height * 2, 2),
        a      = roundFractional(width * height, 2);

    $('#rectangle-perimeter').val(p);
    $('#rectangle-area').val(a);
  });
});
