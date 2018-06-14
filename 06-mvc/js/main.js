/* global colorView sizeView controller mvcData: true */
$(function() {
  colorView.init($('.mvc-view1'));
  sizeView.init($('.mvc-view2'));
  controller.init($('.mvc-view3'));
  
  controller.on(function(val) {
    mvcData.set(val);
    localStorage.setItem('value', val);
  });

  mvcData.on(colorView.onColorChange);
  mvcData.on(sizeView.onSizeChange);

  $(window).resize(colorView.resize);
  $(window).resize(sizeView.resize);

  var value = localStorage.getItem('value');
  if(value !== null) {
    mvcData.set(value);
    controller.setValue(value);
  }
});
