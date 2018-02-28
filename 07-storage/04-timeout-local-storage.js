function set(key, value) {
  var t = Date.now();
  var str = JSON.stringify({v: value, time: t});
    
  localStorage.setItem(key, str);
}

function get(key, expire) {
  var str = localStorage.getItem(key);

  var obj = JSON.parse(str);
  
  var isExpire = (Date.now() - obj.time) > expire;

  return isExpire ? '你要取的数据已经过期' : obj.v; 
}
