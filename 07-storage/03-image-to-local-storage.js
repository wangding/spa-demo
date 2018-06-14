$(function() {
  var $img = $('.main img'),
      $btn = $('input[type="submit"]'),
      $tmpImage;

  init();
  loadImage();

  function init() {
    $tmpImage = $('<img>');
    $tmpImage.attr('crossOrigin', 'anonymous');
  }

  function loadImage() {
    var str = localStorage.getItem('img');
    if(str) $img.attr('src', str);
  }

  $btn.click(function() {
    $tmpImage.attr('src', $('input[type="url"]').val());
  });

  $tmpImage.load(function() {
    var can = $('<canvas>').get(0);
    var ctx = can.getContext('2d');

    can.width = this.width;
    can.height = this.height;

    ctx.drawImage(this, 0, 0, can.width, can.height);
    var str = can.toDataURL();
    localStorage.setItem('img', str);
    loadImage();
  });
});
