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

let currentPagePairIndex = 0; 
let pagePairsCount = 0;
let pagesData = []; 
let domElements = []; 
const imageFiles = [];

// 自动探测独立文件夹 `S2_Memory_MAG_EN_IMG/` 中的图片数量
function autoDetectImages(callback) {
    let currentCheckIndex = 1;
    pageIndicator.innerText = "Grab a coffee, this might take a minute...";

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
    pagePairsCount = images.length / 2;

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

    for (let i = 0; i < pagePairsCount; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page';
        pageDiv.style.zIndex = pagePairsCount - i;

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

    managePreloading();
    updateUI();
}

function managePreloading() {
    const startWindow = Math.max(0, currentPagePairIndex - PRELOAD_WINDOW);
    const endWindow = Math.min(pagePairsCount - 1, currentPagePairIndex + PRELOAD_WINDOW);

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

function turnPage(direction) {
    if (direction === 'next' && currentPagePairIndex < pagePairsCount) {
        domElements[currentPagePairIndex].container.style.transform = 'rotateY(-180deg)';
        domElements[currentPagePairIndex].container.style.zIndex = currentPagePairIndex + 1;
        currentPagePairIndex++;
    } else if (direction === 'prev' && currentPagePairIndex > 0) {
        currentPagePairIndex--;
        domElements[currentPagePairIndex].container.style.transform = 'rotateY(0deg)';
        domElements[currentPagePairIndex].container.style.zIndex = pagePairsCount - currentPagePairIndex;
    }
    
    managePreloading();
    updateUI();
}

function updateUI() {
    prevBtn.disabled = currentPagePairIndex === 0;
    nextBtn.disabled = currentPagePairIndex === pagePairsCount;
    
    let displayText = "";
    if (currentPagePairIndex === 0) {
        displayText = "Cover";
    } else if (currentPagePairIndex === pagePairsCount) {
        displayText = "Back Cover";
    } else {
        const leftPage = currentPagePairIndex * 2;
        const rightPage = leftPage + 1;
        displayText = `P${leftPage} - ${rightPage}`;
    }
    
    pageIndicator.innerText = `${displayText} / ${pagePairsCount * 2} Pages`;
}

prevBtn.addEventListener('click', () => turnPage('prev'));
nextBtn.addEventListener('click', () => turnPage('next'));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') turnPage('next');
    if (e.key === 'ArrowLeft') turnPage('prev');
});

window.addEventListener('DOMContentLoaded', () => {
    autoDetectImages(initMagazine);
});