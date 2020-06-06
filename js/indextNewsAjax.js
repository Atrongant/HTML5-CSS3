$.ajax({
  url: "./data/newsCategory.php",
  dataType: "json",
  async: false,
  cache: false,
  data: JSON.stringify({
    module: "news",
  }),
  headers: {
    "Content-Type": "application/json; charset=urf-8",
  },
  type: "POST",
  beforeSend: function () {},
  success: function (req) {
    let tabMenu = document.querySelector(".tab-menu");
    console.log(tabMenu);
    let menuHtml = "";
    req.data.forEach((item, index) => {
      let className = index == 0 ? "current" : "";
      menuHtml += `<a data-request="false" href="javascript:void(0);" onclick="loadNewsData({_this:this,id : ${item.id},idx : ${index}});" class="${className}" title="${item.categoryName}">${item.categoryName}</a>`;
    });
    tabMenu.innerHTML = menuHtml;
    let _this = tabMenu.children[0];
    loadNewsData({ _this: _this, id: req.data[0].id, idx: 0 });
  },
  complete: function () {},
  error: function () {},
});

function loadNewsData() {
  /* 获取tab按钮是否点击的状态，若已经点击过代表已经获取到了数据，就不再请求ajax */
  let _this = arguments[0]._this; //获取tab对象
  let isRequest = _this.getAttribute("data-request"); //获取tab上的自定义属性
  let boxs = document.querySelectorAll(".news-wrap .box"); //获取所有内容容器
  let idx = arguments[0].idx; //当前点击的是哪个标签
  let menus = document.querySelectorAll(".tab-menu>a"); //获取所有的tab
  menus.forEach((item) => {
    item.className = "";
  });
  menus[idx].className = "current";
  menus[idx].setAttribute("data-request", true);
  boxs.forEach((item, index) => {
    if (index == idx) item.style.display = "block";
    else item.style.display = "none";
  });
  if (isRequest == "true") return false;
  $.ajax({
    url: "./data/indexNews.php",
    dataType: "json",
    timeout: 5000,
    data: JSON.stringify({
      categoryId: arguments[0].id,
    }),
    headers: {
      "Content-Type": "application/json; charset=urf-8",
      token: "aaa",
    },
    type: "POST",
    beforeSend: function () {},
    success: function (req) {
      let boxHtml = "";
      req.data.forEach((item) => {
        let date = item.time.split(" ")[0];
        boxHtml += `
              <div class="col-item-3">
                <div class="item">
                  <div class="img-cover" style="background-image:url(${item.imgUrl}">
                    <img src="images/blank/indexNews.png" alt="${item.title}" width="100%">
                  </div>
                  <div class="figure-content padding-top-24">
                    <h4 class="title">${item.title}</h4>
                    <time datetime="${item.time}" pubtime="${date}">${date}</time>
                    <i class="line"></i>
                    <p class="dec">${item.dec}</p>
                    <a href="" class="link-more">查看更多<i class="iconfont icon-jiantou1"></i></a>
                  </div>
                </div>
              </div>
            `;
      });
      boxs[idx].innerHTML = boxHtml;
      _this.setAttribute("data-request", "true");
    },
    complete: function () {},
    error: function () {},
  });
}
