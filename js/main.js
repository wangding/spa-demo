/* global navBar spaStage $forkMeGH: true */
$(function(){
  navBar.init($('.spa-nav'));
  spaStage.init($('.spa-content'));
  $forkMeGH.show('https://github.com/wangding/spa-demo');

  navBar.on('title-click', function(isOpen) {
    var display = isOpen ? 'none': 'block';
    spaStage.show({ display: display });
  });

  navBar.on('item-click', function(href) {
    spaStage.show({display: 'block', href: href});
  });

  $(window).resize(function() {
    navBar.resize($(window).innerWidth());
  });
});
