const q = document.querySelector,
      $ = q.bind(document);

let $width   = $('#rectangle-width'),
    $height  = $('#rectangle-height'),
    $btnCalc = $('#rectangle-calc');

$btnCalc.onclick = () => {
  if(!validate('#rectangle-width') || !validate('#rectangle-height')) return;

  let w = Number($width.value),
      h = Number($height.value),
      p = roundFractional(w * 2 + h * 2, 2),
      a = roundFractional(w * h, 2);

  $('#rectangle-perimeter').value = p;
  $('#rectangle-area').value = a;
};

$width.onblur = () => {
  validate('#rectangle-width');
};

$height.onblur = () => {
  validate('#rectangle-height');
};

/**
 * 小数点后面保留第 n 位
 *
 * @param {Number} x 做近似处理的数
 * @param {Number} n 小数点后第 n 位
 * @returns {Number} 近似处理后的数
 */
function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

/**
 * 对字段进行数据合法性校验
 *
 * @param {String} field 字段的 id
 * @returns {Boolean} 验证通过为 true，验证不通过为 false
 */
function validate(field) {
  var $data    = $(field),
      $message = $(field + '-validate'),
      label    = $(field).getAttribute('data-label');

  if($data.value === '') {
    $message.innerHTML = label + '不能为空！';
    $data.select();
    return false;
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.value)) {
    $message.innerHTML = label + '必须是数值';
    $data.select();
    return false;
  }

  if(Number($data.value) < 0) {
    $message.innerHTML = label + '必须大于零';
    $data.select();
    return false;
  }

  $message.innerHTML = '';
  return true;
}
