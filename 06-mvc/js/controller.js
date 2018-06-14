(function() {
  var controller = {},
      $container,
      _listeners = [],
      $controller;

  controller.init = function(container) {
    $container = container;
    $controller = $('<input class="mvc-controller" type="range" min="0" max="255" value="0" title="Controller">');
    $container.append($controller);

    $controller.change(function() {
      _listeners.forEach(function(e) {
        e.call(this, $controller.val());
      });
    });
  };

  controller.on = function(listener) {
    _listeners.push(listener);
  };
  
  controller.setValue = function(val) {
    $controller.val(val);
  };

  window.controller = controller;
}());
