let slideWrap = document.getElementById('slide-wrap');
let slideContent = slideWrap.querySelector('.slide-content');
let viewWidth = document.documentElement.clientWidth || document.body.clientWidth;
let firstUl = slideContent.querySelector('.clearfix');
let liItem = firstUl.children;
let navItem = slideWrap.querySelector('.slide-nav').getElementsByTagName('a');
let prev = slideWrap.querySelector('.slide-prev'); //下一页按钮
let next = slideWrap.querySelector('.slide-next'); //上一页按钮
/* 存储当前幻灯片的索引 */
let idx = 0;
/* 滚动开关标记，防止频繁点击上下一页按钮幻灯片切换异常 */
let flag = false;
/* 定时器，切换幻灯片完成1s钟以后才能进行下一次切换 */
let timer = null;
/* 自动播放的定时器 */
let autoTimer = null;
/* 设置滑动对象的宽度 */
slideContent.style.width = viewWidth * liItem.length + 'px';
/* 设置li对象的宽度 */
for (let i = 0; i < liItem.length; i++) {
    liItem[i].style.width = viewWidth + 'px';
}
/* 给导航a设置点击事件,按钮高光切换 */
for (let i = 0; i < navItem.length; i++) {
    navItem[i].onclick = function () {
        idx = i; //存储当前的索引
        imgSlide();
    }
}
/* 左右箭头点击事件 */
prev.onclick = function () {
    // idx--;
    if (flag) return;
    flag = true;
    prevSlide();
};

next.onclick = function () {
    // idx++;
    if (flag) return;
    flag = true;
    nextSlide();
};

function prevSlide() {
    if (--idx < 0) {
        idx = liItem.length - 1;
    }
    imgSlide();
}

function nextSlide() {
    if (++idx > liItem.length - 1) {
        idx = 0;
    }
    imgSlide();
}
/* 执行自动播放 */
autoPlay();
/* 自动播放幻灯片 */
function autoPlay() {
    autoTimer = setInterval(function () {
        nextSlide();
    }, 3000);
}
/* 鼠标滑入停止幻灯片播放，滑出继续幻灯片播放 */
slideWrap.onmouseenter = function () {
    clearInterval(autoTimer);
};
slideWrap.onmouseleave = autoPlay;
/* 按钮高亮切换，幻灯片切换 */
function imgSlide() {
    for (let j = 0; j < navItem.length; j++) {
        navItem[j].className = '';
    }
    navItem[idx].className = 'current';
    let left = idx * viewWidth;
    slideContent.style.left = -left + 'px';
    // 一秒钟后才可以进行下一次点击切换幻灯片
    timer = setTimeout(function () {
        flag = false;
        clearTimeout(timer);
    }, 1000);
}