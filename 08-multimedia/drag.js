/Linux|Android/.test(navigator.userAgent) && (function($) {
  var proto      =  $.ui.mouse.prototype,
      _mouseInit = proto._mouseInit;

  $.extend(proto, {
    _mouseInit: function() {
      this.element
        .bind('touchstart.' + this.widgetName, $.proxy(this, '_touchStart'));
      _mouseInit.apply(this, arguments);
    },

    _touchStart: function(event) {
      this.element
        .bind('touchmove.' + this.widgetName, $.proxy(this, '_touchMove'))
        .bind('touchend.' + this.widgetName, $.proxy(this, '_touchEnd' ));

      this._modifyEvent(event);

      $(document).trigger($.Event('mouseup'));
      this._mouseDown(event);
    },

    _touchMove: function(event) {
      this._modifyEvent(event);
      this._mouseMove(event);
    },

    _touchEnd: function(event) {
      this.element
        .unbind('touchmove.' + this.widgetName) 
        .unbind('touchend.' + this.widgetName);
      this._mouseUp(event);
    },

    _modifyEvent: function(event) {
      event.which = 1;
      var target = event.originalEvent.targetTouches[0];
      event.pageX = target.clientX;
      event.pageY = target.clientY;
    }
  });
})(jQuery);
