const q = document.querySelector,
      $ = q.bind(document);

let $progress = $('progress'),    // 下载进度条控件
    timer     = 0,                // 定时器对象
    i         = 0;                // 进度数值

$('#start-button').onclick = () => {
  if(timer !== 0) return;

  timer = window.setInterval(() => $progress.setAttribute('value', i++), 100);
};

$('#stop-button').onclick = () => {
  window.clearInterval(timer);
  timer = 0;
};

$('#reset-button').onclick = () => $progress.setAttribute('value', i = 0);

// 问题：
//  1. i 的数值超过边界应该自动重置
//  2. i 的数值超过边界定时器是否应该自动关闭，否则影响性能
