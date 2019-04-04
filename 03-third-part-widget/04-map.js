$(function() {
  /* global BMap BMAP_NORMAL_MAP BMAP_HYBRID_MAP BMAP_ANIMATION_BOUNCE: true */
  var map = new BMap.Map('main');  
  var point = new BMap.Point(114.529963, 38.003679);
  map.centerAndZoom(point, 25);

  // 添加地图类型控件
  map.addControl(new BMap.MapTypeControl({
    mapTypes: [
      BMAP_NORMAL_MAP,
      BMAP_HYBRID_MAP ]
  }));   

  map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
  map.setMapType(BMAP_HYBRID_MAP);

  var marker = new BMap.Marker(point, {'title': 'SPA 富应用开发'}); 
  marker.setAnimation(BMAP_ANIMATION_BOUNCE);

  map.addOverlay(marker);
  var opts = {
    width : 230,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title : '<strong>SPA 富应用开发</strong>' 
  };

  var infoWindow = new BMap.InfoWindow(''
      + '<div style="width: 250px">'
        + '<p>'
          + '时间：周二、周四下午<br>'
          + '地点：505 教室'
        + '</p>'
        + '<a href="https://github.com/wangding" target="_blank">'
          + '<img src="https://secure.gravatar.com/avatar/4e1b831efef47d65a762da5d5e89174c?s=250" alt="王顶" width="40px" height="40px" style="position: relative; top: -58px; left: 190px">'
        + '</a>'
      + '</div>', opts);

  marker.openInfoWindow(infoWindow);

  marker.addEventListener('click', function(){          
    map.openInfoWindow(infoWindow, point);
  });
});
