function loadingMsg(params) {
    let wrap = document.getElementById(params.wrap);
    wrap.innerHTML = `<div class="loading-wait">
                    ${params.msg}
                    <div class="loading-icon"><i class="iconfont icon-jiazai"></i></div>
                </div>`;

}