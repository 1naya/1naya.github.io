// ==================== 自动化杂志配置区 ====================
const IMAGE_EXTENSION = "webp"; 

// 🚀 核心隔离：在这里直接定义专属于这期杂志的图片文件夹路径！与其他网页和项目永不冲突
const IMAGE_FOLDER = "S2_Memory_MAG_CN_IMG/"; 

// 🎯 【速度质跃关键】：直接指定杂志的总图片张数，彻底废除阻塞网络探测，实现秒开！
const TOTAL_IMAGES_COUNT = 36; // 👈 请在这里输入你文件夹里实际的图片总张数（例如40、42等）

const PRELOAD_WINDOW = 2; // 手机端和电脑端首屏缓冲，2 已经足够，能极大减轻首屏并发压力
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

// 🚀 瞬间生成图片文件名列表，不再走死板的逐张网络加载探测
function generateImageArray() {
    pageIndicator.innerText = "正在初始化...";
    for (let i = 1; i <= TOTAL_IMAGES_COUNT; i++) {
        let num = String(i).padStart(3, '0');
        imageFiles.push(`${num}.${IMAGE_EXTENSION}`);
    }
}

function initMagazine() {
    let images = [...imageFiles];
    if (images.length % 2 !== 0) {
        images.push(null); // 奇数张图时自动补一张空白页作为封底背面
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
        pageDiv.setAttribute('data-index', i);

        const frontDiv = document.createElement('div');
        frontDiv.className = 'front blank-page';
        frontDiv.innerHTML = '<span>加载中...</span>';

        const backDiv = document.createElement('div');
        backDiv.className = 'back blank-page';
        backDiv.innerHTML = '<span>加载中...</span>';

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
        domNode.innerHTML = data.isBackCover ? '<span>（封底）</span>' : '<span>（空白页）</span>';
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
        domNode.innerHTML = '<span>缓冲中...</span>';
        data.isLoaded = false; 
    }
}

// 🌟 跨端双轨驱动函数（完美兼容手机端展平与电脑端3D）
function updateBookDOM() {
    const pagePairsCount = totalPagesCount / 2;
    const mobileMode = isMobile();

    domElements.forEach((page, index) => {
        page.container.style.display = '';
        page.container.style.opacity = '';
        page.container.style.pointerEvents = '';

        if (mobileMode) {
            // 📱 【手机模式】
            page.container.style.transform = 'none';
            
            const frontPageIndex = index * 2;
            const backPageIndex = index * 2 + 1;

            if (currentPageIndex === frontPageIndex) {
                page.container.classList.add('active-page');
                page.container.classList.remove('show-back');
            } else if (currentPageIndex === backPageIndex) {
                page.container.classList.add('active-page');
                page.container.classList.add('show-back');
            } else {
                page.container.classList.remove('active-page', 'show-back');
            }
        } else {
            // 💻 【电脑模式】
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
        if (currentPageIndex + step <= totalPagesCount) {
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
    nextBtn.disabled = mobileMode ? (currentPageIndex === totalPagesCount - 1) : (currentPageIndex >= totalPagesCount - 1);
    
    let displayText = "";
    if (currentPageIndex === 0) {
        displayText = "封面";
    } else if (currentPageIndex === totalPagesCount - 1) {
        displayText = "封底";
    } else {
        if (mobileMode) {
            displayText = `第 ${currentPageIndex} 页`;
        } else {
            const currentPair = Math.floor(currentPageIndex / 2);
            const leftPage = currentPair * 2;
            const rightPage = leftPage + 1;
            displayText = `P${leftPage} - P${rightPage}`;
        }
    }
    
    pageIndicator.innerText = `${displayText} / 共 ${totalPagesCount} 页`;
}

prevBtn.addEventListener('click', () => turnPage('prev'));
nextBtn.addEventListener('click', () => turnPage('next'));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') turnPage('next');
    if (e.key === 'ArrowLeft') turnPage('prev');
});

window.addEventListener('resize', updateBookDOM);

window.addEventListener('DOMContentLoaded', () => {
    // 1. 先瞬间生成文件名映射
    generateImageArray();
    // 2. 紧接着直接无缝初始化界面
    initMagazine();
});
