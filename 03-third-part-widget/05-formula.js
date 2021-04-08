$(() => {
  /* global MathQuill: true */
  let MQ = MathQuill.getInterface(2);
  let formulaSpan = $('#formula').get(0);
  let formula = '';

  let formulaField = MQ.MathField(formulaSpan, {
    handlers: {
      edit() {
        let enteredMath = formulaField.latex();
        formula = enteredMath;
      }
    }
  });

  $('input[type="button"]').click(() => {
    let $formula = $('<p><span class="formula"></span></p>');

    $formula.find('.formula').html(formula);
    MQ.StaticMath($formula.find('.formula').get(0));
    $('.main').append($formula);
  });
});
