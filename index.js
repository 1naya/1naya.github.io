document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (menuToggle && navMenu) {
        // 1. 汉堡包点击切换逻辑
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            const bars = menuToggle.querySelectorAll('.bar');
            if (bars.length === 3) {
                if (navMenu.classList.contains('active')) {
                    bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                    bars[1].style.opacity = '0';
                    bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
                } else {
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            }
        });
    }

    if (dropbtn && dropdown) {
        // 2. 手机端点击展开/收起下拉菜单
        dropbtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 960) {
                e.preventDefault(); 
                dropdown.classList.toggle('open');
            }
        });
    }

    // 3. 点击常规导航项自动收起抽屉
    const navItems = document.querySelectorAll('.nav-item:not(.dropbtn)');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (menuToggle) {
                const bars = menuToggle.querySelectorAll('.bar');
                if (bars.length === 3) {
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            }
        });
    });
});

// ==========================================================================
// 4. 原生大图弹窗 (Lightbox)
// ==========================================================================
function openLightbox(element) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const clickedImg = element.querySelector("img");

    if (lightbox && clickedImg && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = clickedImg.src;
        lightboxCaption.innerText = clickedImg.alt || "";
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) lightbox.style.display = "none";
}

// ==========================================================================
// 5. 星痕掠影左右切换核心驱动逻辑
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('gallery-track');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    
    if (!track || !prevBtn || !nextBtn) return; 

    let currentIndex = 0;
    let lastWidth = window.innerWidth; // 缓存初始宽度，防范移动端高度Resize干扰

    function updateSlider() {
        const items = track.querySelectorAll('.gallery-item');
        if (items.length === 0) return;

        const itemWidth = items[0].getBoundingClientRect().width;
        const gap = window.innerWidth <= 960 ? 0 : 28; 
        const stepLength = itemWidth + gap;
        
        track.style.transform = `translateX(-${currentIndex * stepLength}px)`;
    }

    nextBtn.addEventListener('click', () => {
        const items = track.querySelectorAll('.gallery-item');
        const maxIndex = window.innerWidth <= 960 ? items.length - 1 : items.length - 2;
        
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        const items = track.querySelectorAll('.gallery-item');
        const maxIndex = window.innerWidth <= 960 ? items.length - 1 : items.length - 2;

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex; 
        }
        updateSlider();
    });

    // 体验升级：锁定只有当水平宽度确实变化时，才重新对齐滑块位置
    window.addEventListener('resize', () => {
        if (window.innerWidth !== lastWidth) {
            lastWidth = window.innerWidth;
            currentIndex = 0;
            updateSlider();
        }
    });
});