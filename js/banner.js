let slideWrap=document.getElementById('slide-wrap');
let slideContent=slideWrap.querySelector('.slide-content');
let viewWidth=document.documentElement.clientWidth||document.body.clientWidth;
let firstUl=slideContent.querySelector('.clearfix');
let liItem=firstUl.children;
let navItem=slideWrap.querySelector('.slide-nav').getElementsByTagName('a');
let prev=slideWrap.querySelector('.slide-prev');
let next=slideWrap.querySelector('.slide-next');
/* 存储当前幻灯片的索引 */
let idx=0;
/* 设置滑动对象的宽度 */
slideContent.style.width=viewWidth*liItem.length+'px';
/* 设置li对象的宽度 */
for(let i=0;i<liItem.length;i++){
    liItem[i].style.width=viewWidth+'px';
}
/* 给导航a设置点击事件,按钮高光切换 */
for(let i=0;i<navItem.length;i++){
    navItem[i].onclick=function(){
        for(let j=0;j<navItem.length;j++){
            navItem[j].className='';
        }
        this.className='current';
        idx=i;//存储当前的索引
        imgSlide(i);
    }
}
// 图片滑动
function imgSlide(idx){
    let left=idx*viewWidth;
    slideContent.style.left=-left+'px';
}
/* 左右箭头点击事件 */
prev.onclick=function(){
    // idx--;
    console.log(idx);
    if(--idx<0){
        idx=liItem.length-1;
    } 
    for(let j=0;j<navItem.length;j++){
        navItem[j].className='';
    }
    navItem[idx].className='current';
    imgSlide(idx);
}
next.onclick=function(){
    // idx++;
    console.log(idx);
    if(++idx>liItem.length-1){
        idx=0;
    }
    for(let j=0;j<navItem.length;j++){
        navItem[j].className='';
    }
    navItem[idx].className='current';
    imgSlide(idx);
}
