$(function(){
  window.onhashchange = function() {
    var $block = $('.main'),
        strHash = window.location.hash,
        color = strHash.substring(2, strHash.length);

    $block.css({'background-color': color});
  };
});
