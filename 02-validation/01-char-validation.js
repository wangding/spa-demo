$(() => {
  let $width   = $('#rectangle-width'),
      $height  = $('#rectangle-height'),
      $calc    = $('#rectangle-calc'),
      blnValid = false;

  $calc.click(() => {
    if(!blnValid) return;

    let width  = Number($width.val()),
        height = Number($height.val()),
        p      = roundFractional(width * 2 + height * 2, 2),
        a      = roundFractional(width * height, 2);

    $('#rectangle-perimeter').val(p);
    $('#rectangle-area').val(a);
  });

  $width.keypress((e) => filterKey(e));

  $height.keypress((e) => filterKey(e));

  $width.focusout(() => validate('#rectangle-width'));

  $height.focusout(() => validate('#rectangle-height'));

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

  /**
   * 验证文本框中输入的每个字符，过滤掉非法字符
   *
   * @param e 按键事件
   * @returns {undefined}
   */
  function filterKey(e) {
    let pos = e.target.selectionStart,
        content = e.target.value;

    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
      e.preventDefault();
      return;
    }

    if(e.key === '.') {
      if(pos === 0 || content.indexOf('.') !== -1) {
        e.preventDefault();
        return;
      }

      if(pos  === 1 && content.substring(0,1) === '-') {
        e.preventDefault();
        return;
      }
    }

    if(e.key === 'e') {
      if(pos === 0 || content.indexOf('e') !== -1 
          || content.indexOf('E') !== -1) {
        e.preventDefault();
        return;
      }

      if(pos === 1 && content.substring(0,1) === '-') {
        e.preventDefault();
        return;
      }
    }

    if(e.key === 'E') {
      if(pos === 0 || content.indexOf('e') !== -1 
          || content.indexOf('E') !== -1) {
        e.preventDefault();
        return;
      }

      if(pos === 1 && content.substring(0,1) === '-') {
        e.preventDefault();
        return;
      }
    }
  }

  /**
   * 对字段进行数据合法性校验
   *
   * @param {string} field 字段的 id
   * @returns {boolean} 验证通过为 true，验证不通过为 false
   */
  function validate(field) {
    let $data    = $(field),
        $message = $(field + '-validate'),
        label    = $(field).attr('data-label');

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
