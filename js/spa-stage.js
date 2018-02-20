(function() {
  var spaStage = {};

  spaStage.init = function($container) {
    var $iframe = $('<iframe frameborder="0"></iframe>');
  
    $iframe.attr('src', '00-first-app/index.html');
    $container.append($iframe);
  };

  spaStage.show = function(msg) {
    if(msg.display) $('.spa-content').css({ display: msg.display });
    if(msg.href) $('.spa-content iframe').attr('src', msg.href);
  };

  window.spaStage = spaStage;
}());
