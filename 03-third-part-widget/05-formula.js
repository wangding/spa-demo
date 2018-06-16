$(function() {
  /* global MathQuill: true */
  var MQ = MathQuill.getInterface(2);
  var formulaSpan = $('#formula').get(0);
  var formula = '';

  var formulaField = MQ.MathField(formulaSpan, {
    handlers: {
      edit: function() {
        var enteredMath = formulaField.latex();     
        formula = enteredMath;
      }
    }
  });

  $('input[type="button"]').click(function() {
    var $formula = $('<p><span class="formula"></span></p>');
    
    $formula.find('.formula').html(formula);
    MQ.StaticMath($formula.find('.formula').get(0));
    $('.main').append($formula);
  });
});
