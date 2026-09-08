/* ==========================================================================
   Regnas Travel - Navigation Buttons
   ========================================================================== */


/* ==========================================================================
   全局样式
   ========================================================================== */

(function () {

    const style = document.createElement("style");

    style.textContent = `

        .regnas-button {
            position: fixed;

            right: 16px;

            width: 144px;

            display: block;

            z-index: 1500;

            text-decoration: none;
/* 因为取消圆角所以溢出裁剪不需要了 */
/*            border-radius: 10px;

            overflow: hidden;*/
/* 透明背景关闭阴影 */
/*            box-shadow:
                0 4px 14px rgba(0, 0, 0, 0.15);*/

            transition:
                transform 0.25s ease,
                box-shadow 0.25s ease;
        }


        .regnas-button img {
            display: block;

            width: 100%;
            height: auto;

            border: 0;
        }


        .regnas-button:hover {
            transform: translateY(-3px);

/* 透明背景关闭阴影 */
/*            box-shadow:
                0 7px 20px rgba(0, 0, 0, 0.2);*/
        }


        @media (max-width: 700px) {

            .regnas-button {
                right: 12px;

                width: 126px;
            }

        }

    `;

    document.head.appendChild(style);

})();



/* ==========================================================================
   按钮 1：返回主页
   ========================================================================== */

(function () {

    const button = document.createElement("a");

    button.href = "subpic.html";

    button.className = "regnas-button";

    button.style.bottom = "18px";

    button.innerHTML = `
        <img
            src="images_index/btn_preview.png"
            alt="返回主页"
        >
    `;

    document.body.appendChild(button);

})();



/* ==========================================================================
   按钮 2：项目预览
   ========================================================================== */
/* 暂时先不要按钮2
(function () {

    const button = document.createElement("a");

    button.href = "regnas_preview.html";

    button.className = "regnas-button";

    button.style.bottom = "120px";

    button.innerHTML = `
        <img
            src="https://placehold.co/164x164/png?text=PREVIEW"
            alt="项目预览"
        >
    `;

    document.body.appendChild(button);

})();
*/


/*
===========================================================================
以后增加按钮

直接复制下面这一整段即可。

只需要修改：

1. href       → 跳转地址
2. bottom     → 距离底部的位置
3. src        → 图片地址
4. alt        → 图片说明

位置建议：

第一个  18px
第二个  120px
第三个  222px
第四个  324px
===========================================================================
*/

/*
(function () {

    const button = document.createElement("a");

    button.href = "这里填写链接";

    button.className = "regnas-button";

    button.style.bottom = "222px";

    button.innerHTML = `
        <img
            src="这里填写图片地址"
            alt="按钮说明"
        >
    `;

    document.body.appendChild(button);

})();
*/