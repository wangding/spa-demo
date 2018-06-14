(function() {
  var colorView = {},
      $container,
      $colorView,
      nWidth;

  colorView.init = function(container) {
    $container = container;
    $colorView = $('<div class="mvc-colorview" title="Color View"></div>');
    $container.append($colorView);
    
    nWidth = $colorView.innerWidth();
    this.resize();
  };

  colorView.resize = function() {
    var nPos = ($container.innerHeight() - nWidth) / 2;
    $colorView.css({'top': nPos + 'px'});
  };

  colorView.onColorChange = function(msg) {
    var color = 255 - msg;
    var colorStr = 'rgb(' + color + ',' + color +',' + color +')';

    $('.mvc-colorview').css({'background': colorStr});
  };

  window.colorView = colorView;
}());
