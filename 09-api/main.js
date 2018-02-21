$(function() {
  $('.api').html(navApi());

  function navApi() {
    var nav = window.navigator;

    return '' +
      '浏览器的内部“代码”名称：' + nav.appCodeName + '<br>' +
      '浏览器的正式名称：' + nav.appName  + '<br>' +
      '浏览器的版本号：' + nav.appVersion + '<br>' +
      '浏览器的构建标识符：' + nav.buildID + '<br>' +
      '设备的网络连接的信息：' + nav.connection + '<br>' +
      '浏览器是否启用了 cookies：' + nav.cookieEnabled + '<br>' +
      '网站和应用程序是否跟踪用户：' + nav.doNotTrack + '<br>' +
      '当前浏览器的语言种类：' + nav.language + '<br>' +
      '当前浏览器支持的MIME类型列表：' + nav.mimeTypes + '<br>' +
      '当前浏览器是否正常联网：' + nav.onLine + '<br>' +
      '当前所使用的操作系统类型：' + nav.oscpu + '<br>' +
      '当前所使用的系统平台类型：' + nav.platform + '<br>';
  }
});
