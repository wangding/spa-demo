$(function(){
  //console.log(spaDemoData);

  var $nav = $('.spa-nav');
  spaDemoData.forEach(function(e) {
    console.log(e);
    var $details = $(''
      + '<details open>'
        + '<summary>' + e.class + '</summary>'
        + '<ul></ul>'
      + '</details>');

    $nav.append($details);
    var $ul = $details.find('ul');

    e.demos.forEach(function(item) {
      console.log(item);
      var html = ''
        + '<li>'
          + '<a href="' + e.baseUrl + '/' + item.url + '">' + item.title + '</a>'
        + '</li>'

      $ul.append($(html));
    });
  });

  $('.spa-nav a').click(function(e) {
    $('.spa-content').attr('src', e.target.href);
    e.preventDefault();
  });
});
