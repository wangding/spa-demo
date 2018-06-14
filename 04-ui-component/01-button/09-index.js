$(function() {
  var radStatus,
      txtTime  = $('details input[type="number"]'),
      txtTitle = $('details input[type="text"]'),
      txtCode  = $('details textarea'),
      fmButton = $('details form');

  fmButton.submit(function(e) {
    e.preventDefault();
    radStatus  = $('details input[type="radio"]:checked');

    /*global timerButton:true*/
    var btn = timerButton({
      'container': 'div.main',
      'enabled': radStatus.val() === 'true',
      'duration': Number(txtTime.val()),
      'text': txtTitle.val()
    });

    btn.on('timer-button-click', new Function(txtCode.val()));
  });
});
