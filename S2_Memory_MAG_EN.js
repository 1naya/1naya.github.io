// ==================== 自动化杂志配置区 ====================
const IMAGE_EXTENSION = "webp"; 

// 🚀 核心隔离：在这里直接定义专属于这期杂志的图片文件夹路径！与其他网页和项目永不冲突
const IMAGE_FOLDER = "S2_Memory_MAG_EN_IMG/"; 

const PRELOAD_WINDOW = 2; 
// ========================================================

const book = document.getElementById('book');
const prevBtn = document.getElementById('prevBtn'); 
const nextBtn = document.getElementById('nextBtn'); 
const pageIndicator = document.getElementById('pageIndicator');

// 🌟 跨端双轨指针：电脑端使用 pairIndex(双页)，手机端使用单独的单页
let currentPageIndex = 0; 
let totalPagesCount = 0;
let pagesData = []; 
let domElements = []; 
const imageFiles = [];

// 判断当前是否为手机端
const isMobile = () => window.innerWidth <= 768;

// 自动探测图片数量
function autoDetectImages(callback) {
    let currentCheckIndex = 1;
    pageIndicator.innerText = "正在加载...";

    function checkNext() {
        let num = String(currentCheckIndex).padStart(3, '0');
        let testImg = new Image();
        testImg.src = `${IMAGE_FOLDER}${num}.${IMAGE_EXTENSION}`;
        
        testImg.onload = function() {
            imageFiles.push(`${num}.${IMAGE_EXTENSION}`);
            currentCheckIndex++;
            if (currentCheckIndex < 1000) {
                checkNext();
            } else {
                callback();
            }
        };

        testImg.onerror = function() {
            if (imageFiles.length === 0) {
                pageIndicator.innerText = `未在 ${IMAGE_FOLDER} 发现 001.webp`;
                console.error("未检测到有效图片，请确认命名和文件夹是否正确");
            } else {
                callback(); 
            }
        };
    }

    checkNext();
}

function initMagazine() {
    let images = [...imageFiles];
    if (images.length % 2 !== 0) {
        images.push(null); 
    }
    totalPagesCount = images.length;

    pagesData = images.map((src, index) => {
        return {
            index: index,
            src: src ? `${IMAGE_FOLDER}${src}` : null,
            isLoaded: false,
            isCover: index === 0,
            isBackCover: index === images.length - 1
        };
    });

    book.innerHTML = '';
    domElements = [];

    const pagePairsCount = totalPagesCount / 2;
    for (let i = 0; i < pagePairsCount; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page';
        pageDiv.setAttribute('data-index', i); // 标记是第几张纸

        const frontDiv = document.createElement('div');
        frontDiv.className = 'front blank-page';
        frontDiv.innerHTML = '<span>Loading...</span>';

        const backDiv = document.createElement('div');
        backDiv.className = 'back blank-page';
        backDiv.innerHTML = '<span>Loading...</span>';

        pageDiv.appendChild(frontDiv);
        pageDiv.appendChild(backDiv);
        book.appendChild(pageDiv);

        domElements.push({
            container: pageDiv,
            front: frontDiv,
            back: backDiv
        });
    }

    updateBookDOM();
}

function managePreloading() {
    const pagePairsCount = totalPagesCount / 2;
    const currentPairIndex = Math.floor(currentPageIndex / 2);
    const startWindow = Math.max(0, currentPairIndex - PRELOAD_WINDOW);
    const endWindow = Math.min(pagePairsCount - 1, currentPairIndex + PRELOAD_WINDOW);

    for (let i = 0; i < pagePairsCount; i++) {
        const frontPageIndex = i * 2;
        const backPageIndex = i * 2 + 1;

        if (i >= startWindow && i <= endWindow) {
            loadImage(frontPageIndex, domElements[i].front);
            loadImage(backPageIndex, domElements[i].back);
        } else {
            unloadImage(frontPageIndex, domElements[i].front);
            unloadImage(backPageIndex, domElements[i].back);
        }
    }
}

function loadImage(pageIndex, domNode) {
    const data = pagesData[pageIndex];
    if (!data.src) {
        domNode.className = (pageIndex % 2 === 0) ? "front blank-page" : "back blank-page";
        domNode.innerHTML = data.isBackCover ? '<span>（Back Cover）</span>' : '<span>（Blank）</span>';
        return;
    }

    if (!data.isLoaded) {
        const img = document.createElement('img');
        img.src = data.src;
        img.alt = `Page ${pageIndex + 1}`;
        
        img.onload = () => {
            domNode.className = (pageIndex % 2 === 0) ? "front" : "back";
            domNode.innerHTML = '';
            domNode.appendChild(img);
            data.isLoaded = true;
        };
    }
}

function unloadImage(pageIndex, domNode) {
    const data = pagesData[pageIndex];
    if (data.src && data.isLoaded) {
        domNode.className = (pageIndex % 2 === 0) ? "front blank-page" : "back blank-page";
        domNode.innerHTML = '<span>Loading...</span>';
        data.isLoaded = false; 
    }
}

// 🌟 核心双轨驱动函数
function updateBookDOM() {
    const pagePairsCount = totalPagesCount / 2;
    const mobileMode = isMobile();

    domElements.forEach((page, index) => {
        // 先清除残余的行内特殊属性，防止跨端切换样式死锁
        page.container.style.display = '';
        page.container.style.opacity = '';
        page.container.style.pointerEvents = '';

        if (mobileMode) {
            // 📱 【手机模式】：彻底关闭 3D 效果
            page.container.style.transform = 'none';
            
            const frontPageIndex = index * 2;
            const backPageIndex = index * 2 + 1;

            if (currentPageIndex === frontPageIndex) {
                // 当前页是这张纸的正面
                page.container.classList.add('active-page');
                page.container.classList.remove('show-back');
            } else if (currentPageIndex === backPageIndex) {
                // 当前页是这张纸的背面
                page.container.classList.add('active-page');
                page.container.classList.add('show-back');
            } else {
                // 别的页面全部隐藏
                page.container.classList.remove('active-page');
                page.container.classList.remove('show-back');
            }
        } else {
            // 💻 【电脑模式】：恢复你最爱的完美 3D 物理翻页
            page.container.classList.remove('active-page', 'show-back');
            
            const pairIndex = Math.floor(currentPageIndex / 2);
            if (index < pairIndex) {
                page.container.style.transform = 'rotateY(-180deg)';
                page.container.style.zIndex = index;
            } else {
                page.container.style.transform = 'rotateY(0deg)';
                page.container.style.zIndex = pagePairsCount - index;
            }
        }
    });

    managePreloading();
    updateUI();
}

function turnPage(direction) {
    const step = isMobile() ? 1 : 2; 

    if (direction === 'next') {
        if (currentPageIndex + step < totalPagesCount) {
            currentPageIndex += step;
            updateBookDOM();
        }
    } else if (direction === 'prev') {
        if (currentPageIndex - step >= 0) {
            currentPageIndex -= step;
            updateBookDOM();
        }
    }
}

function updateUI() {
    const mobileMode = isMobile();
    
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = mobileMode ? (currentPageIndex === totalPagesCount - 1) : (currentPageIndex >= totalPagesCount - 2);
    
    let displayText = "";
    if (currentPageIndex === 0) {
        displayText = "Cover";
    } else if (currentPageIndex === totalPagesCount - 1) {
        displayText = "Back Cover";
    } else {
        if (mobileMode) {
            displayText = `P${currentPageIndex}`;
        } else {
            const currentPair = Math.floor(currentPageIndex / 2);
            const leftPage = currentPair * 2;
            const rightPage = leftPage + 1;
            displayText = `P${leftPage}-P${rightPage}`;
        }
    }
    
    pageIndicator.innerText = `${displayText}/${totalPagesCount}Pages`;
}

prevBtn.addEventListener('click', () => turnPage('prev'));
nextBtn.addEventListener('click', () => turnPage('next'));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') turnPage('next');
    if (e.key === 'ArrowLeft') turnPage('prev');
});

window.addEventListener('resize', updateBookDOM);

window.addEventListener('DOMContentLoaded', () => {
    autoDetectImages(initMagazine);
});