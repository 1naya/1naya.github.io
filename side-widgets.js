/**
 * 🚀 星痕共鸣档案·全自动智能侧边挂件流 (V2.1 纯净防拦截版)
 * 作用：一行代码引入。自动探测 img_side 文件夹下的 001~070.webp
 */
// <script src="side-widgets.js"></script>
document.addEventListener("DOMContentLoaded", function() {
    
    const folderPath = "img_side/"; // 🎯 遵照嘱托：请把你的文件夹名字也同步改为 img_side
    const maxCheckCount = 70;     
    
    let validImages = [];       
    let leftCurrentImg = "";
    let rightCurrentImg = "";

    // ==========================================================================
    // 1. 核心高智商流：自动试探
    // ==========================================================================
    let checkedCount = 0;
    for (let i = 1; i <= maxCheckCount; i++) {
        const fileNumber = String(i).padStart(3, '0'); 
        const testImgUrl = `${folderPath}${fileNumber}.webp`;
        
        const imgTester = new Image();
        imgTester.src = testImgUrl;
        
        imgTester.onload = function() {
            validImages.push(testImgUrl);
            checkComplete();
        };
        imgTester.onerror = function() {
            checkComplete();
        };
    }

    function checkComplete() {
        checkedCount++;
        if (checkedCount === maxCheckCount) {
            if (validImages.length > 0) {
                initSideWidgets();
            }
        }
    }

    // ==========================================================================
    // 2. 自动化注入专属 CSS 样式（彻底移除 ad / banner 等敏感词）
    // ==========================================================================
    function initSideWidgets() {
        const widgetStyle = document.createElement("style");
        widgetStyle.textContent = `
            .side-widget-box {
                display: none;
                position: fixed;
                top: 140px;
                width: 150px; 
                height: auto;
                z-index: 900;
                background: rgba(255, 255, 255, 0.9);
                border: 1px solid rgba(194, 24, 7, 0.1);
                border-radius: 3px; 
                padding: 0px;       
                box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            }
            .side-widget-box img {
                width: 100%;
                height: auto;
                display: block;
                border-radius: 3px; 
                cursor: pointer;
                transition: opacity 0.4s ease-in-out;
            }
            
            @media (min-width: 1600px) {
                /* 🎯 已经为你微调至 145px，更贴近内容边缘 */
                .side-widget-l { display: block; left: calc(50% - 650px - 145px); }
                .side-widget-r { display: block; right: calc(50% - 650px - 145px); }
            }
        `; 
        document.head.appendChild(widgetStyle);

        // ==========================================================================
        // 3. 自动化动态构建 HTML 节点
        // ==========================================================================
        const leftBox = document.createElement("div");
        leftBox.className = "side-widget-box side-widget-l";
        
        const rightBox = document.createElement("div");
        rightBox.className = "side-widget-box side-widget-r";

        const leftImg = document.createElement("img");
        const rightImg = document.createElement("img");
        
        leftBox.appendChild(leftImg);
        rightBox.appendChild(rightImg);
        document.body.appendChild(leftBox);
        document.body.appendChild(rightBox);

        // ==========================================================================
        // 4. 智能轮播逻辑流
        // ==========================================================================
        function getNextRandomImg(currentImg) {
            if (validImages.length <= 1) return validImages[0];
            let nextImg = currentImg;
            while (nextImg === currentImg) {
                const randomIndex = Math.floor(Math.random() * validImages.length);
                nextImg = validImages[randomIndex];
            }
            return nextImg;
        }

        function changeWidgets() {
            leftImg.style.opacity = 0.2;
            rightImg.style.opacity = 0.2;

            setTimeout(() => {
                leftCurrentImg = getNextRandomImg(leftCurrentImg);
                rightCurrentImg = getNextRandomImg(rightCurrentImg);

                leftImg.src = leftCurrentImg;
                rightImg.src = rightCurrentImg;

                leftImg.style.opacity = 1;
                rightImg.style.opacity = 1;
            }, 400); 
        }

        changeWidgets();
        setInterval(changeWidgets, 6000);
        
        // ==========================================================================
        // 5. 点击跳转（已整体注释）
        // ==========================================================================
        /*leftImg.onclick = rightImg.onclick = function() {
            window.open("https://discordapp.com/users/325077792998031361", "_blank");
        };*/
    } 
});