document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("waterfall-container");
    
    // 1. 高性能自动生成 HTML 片段
    let htmlFragment = "";
    GALLERY_DATA.forEach(item => {
        htmlFragment += `
            <div class="waterfall-item">
                <div class="waterfall-img-box">
                    <img src="imgdb1/gallery/${item.src}" alt="${item.title}" loading="lazy">
                    <div class="waterfall-overlay">
                        <span class="view-tag">🔍 查看原图</span>
                    </div>
                </div>
                <div class="waterfall-info">
                    <h4>${item.title}</h4>
                    <p class="author">By @${item.author}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlFragment;

    // 💡 优化：给图片加上 loading="lazy"（懒加载），这样即便有一百张图，也只有滚到屏幕内的才会加载，响应速度直接飞起！

    // 2. 绑定灯箱事件（保持之前的逻辑不变）
    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".lightbox .close-btn");
    
    container.addEventListener("click", function(e) {
        const imgBox = e.target.closest(".waterfall-img-box");
        if (!imgBox) return;

        const img = imgBox.querySelector("img");
        const item = imgBox.closest(".waterfall-item");
        const title = item.querySelector("h4").textContent;
        const author = item.querySelector(".author").textContent;
        
        lightboxImg.src = img.src;
        lightboxCaption.innerHTML = `<strong>${title}</strong> — ${author}`;
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    // 关闭灯箱
    const closeLightbox = () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    };
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => { if(e.target === lightbox) closeLightbox(); });
});