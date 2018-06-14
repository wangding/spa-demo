/* exported RangeWidget */
var RangeWidget = (function() {
  function RangeWidget(min, max) {
    this.min = min;
    this.max = max;
    this.value = min;
  }

  RangeWidget.prototype.init = function(container) {
    var that = this;
    var $range = $('<div class="range-bar">' +
                     '<div class="range-slide"></div>' +
                   '</div>');
    container.append($range);

    var $slider = $range.find('.range-slide');
    $slider.draggable({ axis: 'x' });

    $slider.on('drag', function(e, ui) {
      var width = $range.innerWidth() - $slider.innerWidth() + 1,
          pos   = ui.position.left;

      if(pos < 0 || pos >= width) e.preventDefault();

      var value = $(this).attr('style').match(/left: (\d*)px/)[1];
      var offset = Math.round((that.max - that.min) * value / width);
      
      notify(that.min + offset);
    });
  };

  var _listensers = [];

  RangeWidget.prototype.on = function(listenser) {
    _listensers.push(listenser);
  };

  function notify(msg) {
    _listensers.forEach(function(e) {
      e.call(this, msg);
    });
  }

  return RangeWidget;
}());
