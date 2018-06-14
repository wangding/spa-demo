(function(){
  var navBar   = {},
      isBigWnd = true,          // 是否是大窗口
      isOpen   = false,         // 导航栏是否已经弹出
      title    = {              // 导航栏的提示文字
        open: 'Demo 目录',
        close: '三'
      },
      titleClickListeners = [], 
      itemClickListeners = [],
      $lastSelected = null;     // 上一次被选中的列表项

  var dom = function($container, navData) {
    var $nav = $container;
   
    $nav.html(''
      + '<div class="spa-nav-title">'
        + title.open
      + '</div>'
      + '<div class="spa-nav-content">'
      + '</div>');

    navData.forEach(function(e) {
      var $details = $(''
        + '<details open>'
          + '<summary>' + e.class + '</summary>'
          + '<ul></ul>'
        + '</details>');

      $nav.find('.spa-nav-content').append($details);
      var $ul = $details.find('ul');

      e.demos.forEach(function(item) {
        var $list = $(''
          + '<li data-href="' + e.baseUrl + '/' + item.url + '">' 
            + item.title
          + '</li>');

        $ul.append($list);
      });
    });
  };    

  var resize = function(width) {
    isBigWnd = (width <= 600) ? false : true;

    // resize 会影响导航组件的标题
    var navTitle = isBigWnd ? title.open : title.close;
    var $title = $('.spa-nav-title');
    $title.html(navTitle);

    // resize 会影响导航组件的尺寸
    var navHeight = isBigWnd ? ($(window).innerHeight() + 'px') : '30px';
    $('.spa-nav').css({ height: navHeight});

    // resize 会影响导航组件是否显示
    var display = isBigWnd ? 'block' : 'none';
    $('.spa-nav-content').css({ display: display });
  };

  navBar.init = function() {
    var width = $(window).innerWidth();
    
    /* global spaDemoData: true */
    dom($('.spa-nav'), spaDemoData);

    isBigWnd = (width <= 600) ? false : true;

    resize(width);

    $lastSelected = $($('.spa-nav-content').find('li')[0]);
    $lastSelected.addClass('selected');

    $('.spa-nav-title').click(function() {
      if(isBigWnd) return;    // 导航菜单隐藏时忽略导航标题的点击事件

      if(!isOpen) {
        $('.spa-nav').css({ height: '100%' });
        $('.spa-nav-content').css({ display: 'block' });
        isOpen = true;
      } else {
        $('.spa-nav').css({ height: '30px' });
        $('.spa-nav-content').css({ display: 'none' });
        isOpen = false;
      }

      fireTitleClick(isOpen);
    });

    $('.spa-nav-content li').click(function(e) {
      var $selected = $(e.target);
      $lastSelected.removeClass('selected');
      $selected.addClass('selected');
      $lastSelected = $selected;
      
      if(!isBigWnd) {
        $('.spa-nav').css({ height: '30px' });
        $('.spa-nav-content').css({ display: 'none' });
        isOpen = false;
      }

      fireItemClick($selected.attr('data-href'));
    });
  };

  navBar.resize = resize;

  navBar.getOpenState = function() {
    return isOpen;
  };

  navBar.on = function(msg, fun) {
    switch(msg) {
      case 'title-click':
        titleClickListeners.push(fun);
        break;

      case 'item-click':
        itemClickListeners.push(fun);
        break;

      default:
        console.error('你订阅了未知的事件');
    }
  };
  
  var fireItemClick = function(msg) {
    itemClickListeners.forEach(function(e){
      e.call(this, msg);
    });
  };

  var fireTitleClick = function(msg) {
    titleClickListeners.forEach(function(e){
      e.call(this, msg);
    });
  };
  
  window.navBar = navBar;
})();
