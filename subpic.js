/* ==========================================================================
   星痕共鸣国际服中文交流
   拍摄预览 / Subpic

   文件结构：

   subpic.html
   subpic.css
   subpic.js

   subpic/
       001-001.png
       001-002.png
       002-001.png
       occupied.png


   ============================================================
   【你主要需要修改的地方】
   ============================================================ */


// ==========================================================================
// 1. 基础设置
// ==========================================================================

/*
 * 当前图片格式。
 *
 * PNG：
 * const IMAGE_EXTENSION = "png";
 *
 * 以后全部换成 WebP：
 * const IMAGE_EXTENSION = "webp";
 *
 * 不需要修改下面任何代码。
 */
const IMAGE_EXTENSION = "webp";


/*
 * 占位图片。
 *
 * 当数据中存在某张照片，
 * 但是对应的实际图片已经从服务器删除时，
 * 自动显示这张图。
 */
const OCCUPIED_IMAGE = "subpic/occupied.webp";


/*
 * 实际图片所在的文件夹。
 */
const IMAGE_FOLDER = "subpic";



// ==========================================================================
// 2. 【你需要修改的拍摄数据】
// ==========================================================================
//
// 照片现在支持两种写法。
//
//
// 【写法一：普通照片】
//
//     "001-001"
//
//     代表：
//
//     文件：001-001.png
//     网页显示：001-001
//
//
// 【写法二：正式命名的照片】
//
//     {
//         file: "001-zayumao",
//         name: "杂鱼猫"
//     }
//
//     代表：
//
//     文件：001-zayumao.png
//     网页显示：杂鱼猫
//
//
// 所以你可以根据实际情况混合使用。
//
// 例如：
//
//     photos: [
//
//         "001-001",
//
//         {
//             file: "001-zayumao",
//             name: "杂鱼猫"
//         },
//
//         "001-003"
//
//     ]
//
// 最终网页显示：
//
//     001-001
//     杂鱼猫
//     001-003
//
//
//
// 【推荐的实际工作流程】
//
// 征集 / 临时阶段：
//
//     "001-001",
//     "001-002",
//     "001-003"
//
// 正式成品阶段：
//
//     {
//         file: "001-zayumao",
//         name: "杂鱼猫"
//     }
//
// 这样文件夹里的文件名也很好找，
// 同时网页不需要显示真实文件名。
//
//
//
// 【注意】
//
// file：实际图片文件名，不需要写 .png
//
// name：网页显示名称
//
// 如果没有特殊需求，就直接使用普通字符串。
// 不需要为了“统一格式”把所有照片都改成对象。
// ==========================================================================

const SUBPIC_DATA = {

    /*
     * 页面顶部的大标题。
     */
    page: {

        title: "拍摄预览",

        subtitle: "Photo Preview",

        description:
            "这几张是试拍的预览，选个你喜欢的，我们找个时间开拍！"+"Here are the test shots—pick your favorite and let's shoot!"

    },


    /*
     * 地点列表。
【主城地图开始】
出生酒馆（一圈什么都没有，往上走就是炼金，炼金旁边是织造）梦开始的地方-dreamstart
→ 开拓局广场 pioneerBureau→（穿过）中央街区（什么都没有，有个美容商人但是UI里就有）centralDistrict
→ 出城城门（街门广场）townGateSquare → 【第一次战斗地点，可以去打个羊】
→ 原路走大门回来 → 绕一下天纹广场celestinePlaza → 欢乐街（entertainment district）炼金行会／幻想商人Alchemy →织造weaving→ 【这里可回去旅馆一下反正路过】→91线酒馆theSpinningRudder （欢乐街这片基本都在了）→ 议会 oceanHill奥香山→【直接跳到了蒂娜回溯本】【可以考虑先回去一趟，或者从天文广场下去】
→ （跳到）工匠协会ArtisanGuild（钓鱼协会，协会也在这里，码头有个货船）下半镇port Town港口镇
→ 地下街区Underground District → 神殿 shrineArea → 副本入口 unit x research facility未知机体调查处
→ 上半段小镇arena town亚利那镇 （什么都没，只有sdm和，第一次集体照的地方，defense corp‘s camp守备兵团营地）
→然后就剩下海滩没去了asterleeds beach
【主城地图结束】



     */
    locations: [

        {
            id: "000",

            name: "地点速览 | 阿斯特里斯",

            description:
                "纯风景，不含人！ 想帮我拍张更好的记得叫我！"
                + "Pure landscape, no people. Hit me up if you want a better shot!",

            photos: [

                
"000-001","000-002","000-003","000-004","000-005","000-006","000-007","000-008","000-009","000-010","000-011","000-012","000-013","000-014","000-015","000-016","000-017","000-018","000-019","000-020","000-021","000-022","000-023","000-024","000-025","000-026","000-027","000-028","000-029","000-030","000-031","000-032","000-033","000-034","000-035","000-036","000-037","000-038","000-039","000-040","000-041","000-042","000-043","000-044","000-045","000-046","000-047","000-048","000-049","000-050","000-051","000-052","000-053","000-054","000-055","000-056","000-057","000-058","000-059","000-060","000-061","000-062","000-063","000-064","000-065","000-066","000-067","000-068","000-069","000-070","000-071","000-072","000-073"
                 



            ]

        },


        {
            id: "001",

            name: "阿斯特里斯 | ASTERIS",

            description:
                "这里是梦开始的地方，穿上你最漂亮的衣服来和我合影吧！。"
                + "Where dreams started. Dress up and take a photo with me!",

            photos: [

                "001-001",

            ]

        },


        {
            id: "002",

            name: "地点二",

            description:
                "这里是地点二的说明。",

            photos: [

                "002-001",


            ]

        },


        {
            id: "003",

            name: "地点三",

            description:
                "这里是地点三的说明。",

            photos: [

                "003-001",


            ]

        }

    ]

};



// ==========================================================================

// ==========================================================================
// 2.5. 角色胶片展示 / Character Film Showcase
// ==========================================================================

/*
 * 这里是角色展示模块最主要的配置区域。
 *
 * fixed：主人物胶片每一轮最先出现的人物。
 * pool：主人物胶片后续的随机角色池；每轮完整使用一次，不重复。
 * badgePool：顶部小圆形 Badge 使用的图片池，可以和主人物池相同，也可以单独设置。
 *
 * 主人物和 Badge 都采用“少量 DOM + 按需换图”的方式，
 * 不会因为以后增加到 200 个角色就同时创建 200 个 img。
 */
const CHARACTER_SHOWCASE_DATA = {

    background:
        "subpic_char/bg.webp",

    /* 主人物胶片：固定前三人。 */
    fixed: [
        "subpic_char/1.webp",
        "subpic_char/2.webp",
        "subpic_char/3.webp"
    ],

    /* 主人物胶片：随机池。每轮不重复。 */
    pool: [
        "subpic_char/4.webp",
        "subpic_char/5.webp",

    ],

    /* 顶部 Badge。以后可以换成独立的 badge 图片。 */
    badgePool: [
        "subpic_char/icon.webp",
        "subpic_char/icon2.webp",
        "subpic_char/icon3.webp",
        "subpic_char/icon4.webp",
    ],

    /* 人物与人物之间的视觉间距。 */
    characterGap: -75,

    /* Badge 间距。 */
    badgeGap: 25,

    /* 当前速度基本保持不变。 */
    characterSpeed: 92,
    badgeSpeed: 48,

    /* 右边近、左边远。 */
    rightScale: 1.05,
    leftScale: 0.6,

    /* 很轻的纵深，仅用于辅助透视感。 */
    depth: 100,

    /* 第一人物从画框外多少像素开始。 */
    initialOutside: 36,

    /* 下一批人物提前预加载几个。 */
    preloadAhead: 6
};


let characterShowcaseState = null;


/* --------------------------------------------------------------------------
   通用工具
   -------------------------------------------------------------------------- */

function shuffleCharacterList(list) {

    const result = Array.isArray(list)
        ? list.slice()
        : [];

    for (let index = result.length - 1; index > 0; index--) {

        const randomIndex =
            Math.floor(Math.random() * (index + 1));

        const temp = result[index];
        result[index] = result[randomIndex];
        result[randomIndex] = temp;
    }

    return result;
}


function createCharacterSequence() {

    const fixed =
        Array.isArray(CHARACTER_SHOWCASE_DATA.fixed)
            ? CHARACTER_SHOWCASE_DATA.fixed
            : [];

    const pool =
        Array.isArray(CHARACTER_SHOWCASE_DATA.pool)
            ? CHARACTER_SHOWCASE_DATA.pool
            : [];

    return [
        ...fixed,
        ...shuffleCharacterList(pool)
    ];
}


function createBadgeSequence() {

    const pool =
        Array.isArray(CHARACTER_SHOWCASE_DATA.badgePool)
            ? CHARACTER_SHOWCASE_DATA.badgePool
            : [];

    return shuffleCharacterList(pool);
}


function getCharacterHeight() {

    const stage =
        characterShowcaseState &&
        characterShowcaseState.characterStage;

    if (!stage) {
        return 300;
    }

    const value =
        parseFloat(
            getComputedStyle(stage)
                .getPropertyValue("--character-height")
        );

    return Number.isFinite(value) && value > 0
        ? value
        : 300;
}


function getBadgeSize() {

    const stage =
        characterShowcaseState &&
        characterShowcaseState.badgeStage;

    if (!stage) {
        return 72;
    }

    const value =
        parseFloat(
            getComputedStyle(stage)
                .getPropertyValue("--badge-size")
        );

    return Number.isFinite(value) && value > 0
        ? value
        : 72;
}


function createCharacterElement(src, index) {

    const image = document.createElement("img");

    image.className = "character-item";
    image.src = src;
    image.alt = "";
    image.draggable = false;
    image.decoding = "async";
    image.loading = "eager";
    image.dataset.characterIndex = String(index);

    image.addEventListener("error", function () {
        image.classList.add("character-image-error");
    });

    return image;
}


function createBadgeElement(src, index) {

    const image = document.createElement("img");

    image.className = "character-badge-item";
    image.src = src;
    image.alt = "";
    image.draggable = false;
    image.decoding = "async";
    image.loading = "eager";
    image.dataset.badgeIndex = String(index);

    image.addEventListener("error", function () {
        image.classList.add("character-badge-image-error");
    });

    return image;
}


/* --------------------------------------------------------------------------
   主人物胶片
   -------------------------------------------------------------------------- */

/*
 * 人物的运动方向是固定的：右 → 左。
 *
 * 视觉逻辑：
 *   右侧 = 靠近镜头 = 大
 *   左侧 = 远离镜头 = 小
 *
 * 人物不会在画面中央“生成”。每个新人物都被放到当前队列最右端，
 * 而且整个队列始终保持连续，因此一轮结束后也不会出现空档。
 */
function calculateCharacterScale(centerX, stageWidth) {

    if (stageWidth <= 0) {
        return 1;
    }

    const progress =
        Math.max(
            0,
            Math.min(1, centerX / stageWidth)
        );

    const leftScale =
        Number(CHARACTER_SHOWCASE_DATA.leftScale) || 0.72;

    const rightScale =
        Number(CHARACTER_SHOWCASE_DATA.rightScale) || 1.02;

    /* smoothstep：让大小变化自然，不是突然缩放。 */
    const smooth =
        progress * progress * (3 - 2 * progress);

    return (
        leftScale +
        (rightScale - leftScale) * smooth
    );
}


function calculateCharacterDepth(centerX, stageWidth) {

    if (stageWidth <= 0) {
        return 0;
    }

    const progress =
        Math.max(
            0,
            Math.min(1, centerX / stageWidth)
        );

    return progress *
        (Number(CHARACTER_SHOWCASE_DATA.depth) || 28);
}


function getCharacterWidth(item) {

    const element = item.element;
    const height = getCharacterHeight();

    if (element.naturalWidth && element.naturalHeight) {
        return height * element.naturalWidth / element.naturalHeight;
    }

    if (element.offsetWidth > 0) {
        return element.offsetWidth;
    }

    /* 图片还没完成解码时，使用临时宽度；真实图片加载后会自动更新。 */
    return height * 0.5;
}


function positionCharacterItems(state) {

    if (!state || !state.characterStage) {
        return;
    }

    state.characterItems.forEach(function (item) {
        item.width = getCharacterWidth(item);
    });
}


function getCharacterRightEdge(state, excludedItem) {

    let rightEdge = -Infinity;

    state.characterItems.forEach(function (item) {

        if (item === excludedItem) {
            return;
        }

        rightEdge = Math.max(
            rightEdge,
            item.x + item.width
        );
    });

    return Number.isFinite(rightEdge)
        ? rightEdge
        : state.characterStage.clientWidth;
}


function getNextCharacterSource(state) {

    if (!state.characterSequence.length) {
        return null;
    }

    if (state.characterSequenceIndex >= state.characterSequence.length) {

        /* 下一轮已经准备好就直接使用，否则现在生成。 */
        state.characterSequence =
            state.nextCharacterSequence || createCharacterSequence();

        state.nextCharacterSequence = null;
        state.characterSequenceIndex = 0;
    }

    const src =
        state.characterSequence[state.characterSequenceIndex];

    state.characterSequenceIndex++;

    return src || null;
}


function buildInitialCharacterItems(state) {

    state.characterTrack.innerHTML = "";
    state.characterItems = [];
    state.characterSequence = createCharacterSequence();
    state.characterSequenceIndex = 0;
    state.nextCharacterSequence = createCharacterSequence();

    if (state.characterSequence.length === 0) {
        return;
    }

    const stageWidth = state.characterStage.clientWidth;
    const initialOutside =
        Number(CHARACTER_SHOWCASE_DATA.initialOutside) || 36;

    /*
     * 第一人物的整个身体在画框右侧之外。
     * 后面的角色继续接在它后面，形成真正连续的队列。
     */
    let currentX = stageWidth + initialOutside;
    const targetX =
        stageWidth +
        Math.max(stageWidth * 1.15, 520);

    let safety = 0;

    while (
        currentX < targetX &&
        safety < Math.max(20, state.characterSequence.length + 8)
    ) {

        const src = getNextCharacterSource(state);

        if (!src) {
            break;
        }

        const element =
            createCharacterElement(
                src,
                state.characterItems.length
            );

        state.characterTrack.appendChild(element);

        const item = {
            element: element,
            src: src,
            x: currentX,
            width: 0
        };

        state.characterItems.push(item);
        item.width = getCharacterWidth(item);

        currentX +=
            item.width +
            state.characterGap;

        safety++;
    }

    preloadUpcomingCharacters(
        state,
        CHARACTER_SHOWCASE_DATA.preloadAhead
    );
}


function preloadImage(src) {

    if (!src) {
        return;
    }

    const image = new Image();
    image.decoding = "async";
    image.src = src;
}


function preloadUpcomingCharacters(state, count) {

    if (!state || !state.characterSequence.length) {
        return;
    }

    const limit =
        Math.max(0, Number(count) || 0);

    for (let offset = 0; offset < limit; offset++) {

        let index =
            state.characterSequenceIndex + offset;

        let sequence =
            state.characterSequence;

        if (index >= sequence.length) {

            if (!state.nextCharacterSequence) {
                state.nextCharacterSequence =
                    createCharacterSequence();
            }

            index -= sequence.length;
            sequence = state.nextCharacterSequence;
        }

        if (sequence[index]) {
            preloadImage(sequence[index]);
        }
    }
}


function recycleCharacterItem(state, item) {

    if (!state.characterSequence.length) {
        return;
    }

    /*
     * 当前角色已经完全离开左侧。
     * 取“其他角色”的最右端，把它接到队尾。
     * 这样无论第几轮，队列都不会重新从画面中间生成。
     */
    const rightEdge =
        getCharacterRightEdge(state, item);

    if (state.characterSequenceIndex >= state.characterSequence.length) {

        /* 当前轮已经全部取完：无缝切换到预先洗好的下一轮。 */
        state.characterSequence =
            state.nextCharacterSequence || createCharacterSequence();

        state.characterSequenceIndex = 0;
        state.nextCharacterSequence = createCharacterSequence();
    }

    const src =
        state.characterSequence[
            state.characterSequenceIndex
        ];

    state.characterSequenceIndex++;

    item.src = src;
    item.element.src = src;
    item.element.dataset.characterIndex =
        String(state.characterSequenceIndex);

    /*
     * 正常情况下 rightEdge 就是当前队伍最右端。
     * 只有没有其他角色时才从画框外重新建立队伍。
     */
    const outsideStart =
        state.characterStage.clientWidth +
        (Number(CHARACTER_SHOWCASE_DATA.initialOutside) || 36);

    /*
     * 每一轮的第一个新角色必须和第一轮一样，
     * 从画框右侧外开始。
     *
     * 如果队尾仍然在画框外，就继续接在队尾；
     * 如果上一轮最后几个角色已经跑进画框，
     * 则绝不能把新角色接到画框内部。
     */
    item.x =
        Number.isFinite(rightEdge)
            ? Math.max(
                rightEdge + state.characterGap,
                outsideStart
            )
            : outsideStart;

    /* 保留旧宽度直到新图片完成加载，避免换图瞬间跳位。 */
    item.width = getCharacterWidth(item);

    preloadUpcomingCharacters(
        state,
        CHARACTER_SHOWCASE_DATA.preloadAhead
    );
}


function animateCharacterFilm(timestamp) {

    const state = characterShowcaseState;

    if (!state || !state.characterStage) {
        return;
    }

    if (!state.lastTimestamp) {
        state.lastTimestamp = timestamp;
    }

    const delta =
        Math.min(50, timestamp - state.lastTimestamp);

    state.lastTimestamp = timestamp;

    const stageWidth =
        state.characterStage.clientWidth;

    if (stageWidth <= 0) {
        state.animationFrame =
            requestAnimationFrame(animateCharacterFilm);
        return;
    }

    const speed =
        Number(CHARACTER_SHOWCASE_DATA.characterSpeed) || 92;

    const distance =
        speed * delta / 1000;

    /* 先统一移动。 */
    state.characterItems.forEach(function (item) {
        item.x -= distance;
    });

    /* 再统一绘制和回收，避免同一帧中互相影响位置计算。 */
    const recycleList = [];

    state.characterItems.forEach(function (item) {

        item.width = getCharacterWidth(item);

        const centerX =
            item.x + item.width / 2;

        const scale =
            calculateCharacterScale(
                centerX,
                stageWidth
            );

        const depth =
            calculateCharacterDepth(
                centerX,
                stageWidth
            );

        const progress =
            Math.max(
                0,
                Math.min(1, centerX / stageWidth)
            );

        /* 右边清晰，向左远去时略微淡出。 */
        const opacity =
            0.75 + progress * 0.25;

        item.element.style.transform =
            `translate3d(${item.x}px, -50%, ${depth}px) scale(${scale})`;

        item.element.style.opacity =
            String(opacity);

        /* 使用缩放后的视觉宽度判断是否完全离场。 */
        if (
            item.x +
            item.width * scale <
            -100
        ) {
            recycleList.push(item);
        }
    });

    recycleList.forEach(function (item) {
        recycleCharacterItem(state, item);
    });

    state.animationFrame =
        requestAnimationFrame(animateCharacterFilm);
}


/* --------------------------------------------------------------------------
   顶部 Badge 胶片
   -------------------------------------------------------------------------- */

function getBadgeWidth(item) {
    return getBadgeSize();
}


function getBadgeLeftEdge(state, excludedItem) {

    let leftEdge = Infinity;

    state.badgeItems.forEach(function (item) {

        if (item === excludedItem) {
            return;
        }

        leftEdge = Math.min(
            leftEdge,
            item.x
        );
    });

    return Number.isFinite(leftEdge)
        ? leftEdge
        : null;
}


function buildInitialBadgeItems(state) {

    state.badgeTrack.innerHTML = "";
    state.badgeItems = [];
    state.badgeSequence = createBadgeSequence();
    state.badgeSequenceIndex = 0;

    if (state.badgeSequence.length === 0) {
        return;
    }

    const stageWidth = state.badgeStage.clientWidth;
    const badgeSize = getBadgeSize();

    /*
     * 先把轨道铺满，并额外多铺一段。
     * 这样第一个 Badge 离开右侧后，左侧仍然有队列可以接续。
     */
    const targetWidth =
        stageWidth +
        Math.max(stageWidth * 0.85, badgeSize * 4);

    let currentX =
        -badgeSize - state.badgeGap;

    let safety = 0;

    while (
        currentX < targetWidth &&
        safety < 100
    ) {

        if (state.badgeSequenceIndex >= state.badgeSequence.length) {
            state.badgeSequence = createBadgeSequence();
            state.badgeSequenceIndex = 0;
        }

        const src =
            state.badgeSequence[
                state.badgeSequenceIndex++
            ];

        const element =
            createBadgeElement(
                src,
                state.badgeItems.length
            );

        state.badgeTrack.appendChild(element);

        const item = {
            element: element,
            src: src,
            x: currentX,
            width: badgeSize
        };

        state.badgeItems.push(item);

        currentX +=
            badgeSize +
            state.badgeGap;

        safety++;
    }
}


function recycleBadgeItem(state, item) {

    if (!state.badgeSequence.length) {
        return;
    }

    if (state.badgeSequenceIndex >= state.badgeSequence.length) {
        state.badgeSequence = createBadgeSequence();
        state.badgeSequenceIndex = 0;
    }

    const src =
        state.badgeSequence[
            state.badgeSequenceIndex++
        ];

    const badgeSize = getBadgeSize();
    const leftEdge =
        getBadgeLeftEdge(state, item);

    item.src = src;
    item.element.src = src;
    item.width = badgeSize;

    /*
     * Badge 的方向是左 → 右。
     * 离开右侧后，必须接到“最左边”的 Badge 前面，
     * 而不是继续把它放到一个不断增长的 tail 坐标。
     * 这是保证无限循环不跑空的关键。
     */
    item.x =
        leftEdge !== null
            ? leftEdge - badgeSize - state.badgeGap
            : -badgeSize - state.badgeGap;
}


function animateBadgeFilm(timestamp) {

    const state = characterShowcaseState;

    if (!state || !state.badgeStage) {
        return;
    }

    if (!state.badgeLastTimestamp) {
        state.badgeLastTimestamp = timestamp;
    }

    const delta =
        Math.min(
            50,
            timestamp - state.badgeLastTimestamp
        );

    state.badgeLastTimestamp = timestamp;

    const speed =
        Number(CHARACTER_SHOWCASE_DATA.badgeSpeed) || 48;

    const distance =
        speed * delta / 1000;

    state.badgeItems.forEach(function (item) {
        item.x += distance;
    });

    const stageWidth =
        state.badgeStage.clientWidth;

    const recycleList = [];

    state.badgeItems.forEach(function (item) {

        item.width = getBadgeSize();

        item.element.style.transform =
            `translate3d(${item.x}px, -50%, 0)`;

        if (item.x > stageWidth + 40) {
            recycleList.push(item);
        }
    });

    /* 一次回收多个也没有关系：每个都会继续接到当前最左侧。 */
    recycleList.forEach(function (item) {
        recycleBadgeItem(state, item);
    });

    state.badgeAnimationFrame =
        requestAnimationFrame(animateBadgeFilm);
}


/* --------------------------------------------------------------------------
   展示区 DOM
   -------------------------------------------------------------------------- */

function createCharacterShowcaseSection() {

    return `
        <section class="character-showcase-section" aria-label="角色展示">

            <div class="character-showcase-header">
                <div class="character-showcase-title">
                    <span class="character-showcase-number">CHARACTER</span>
                    <h2>角色剪影 | Characters</h2>
                </div>

                <p>
                    与我们一起留下这段旅途的身影
                    <span>/ Faces from our journey</span>
                </p>
            </div>

            <div class="character-badge-stage" id="character-badge-stage" aria-hidden="true">
                <div class="character-badge-track" id="character-badge-track"></div>
            </div>

            <div class="character-stage" id="character-stage">
                <div class="character-stage-background"></div>
                <div class="character-stage-vignette"></div>
                <div class="character-stage-fade character-stage-fade-left"></div>
                <div class="character-stage-fade character-stage-fade-right"></div>
                <div class="character-track" id="character-track" aria-hidden="true"></div>
                <div class="character-stage-ground"></div>
            </div>

        </section>
    `;
}


function stopCharacterShowcase() {

    const state = characterShowcaseState;

    if (!state) {
        return;
    }

    if (state.animationFrame) {
        cancelAnimationFrame(state.animationFrame);
        state.animationFrame = 0;
    }

    if (state.badgeAnimationFrame) {
        cancelAnimationFrame(state.badgeAnimationFrame);
        state.badgeAnimationFrame = 0;
    }
}


function initCharacterShowcase() {

    const characterStage =
        document.getElementById("character-stage");

    const characterTrack =
        document.getElementById("character-track");

    const badgeStage =
        document.getElementById("character-badge-stage");

    const badgeTrack =
        document.getElementById("character-badge-track");

    if (!characterStage || !characterTrack || !badgeStage || !badgeTrack) {
        return;
    }

    stopCharacterShowcase();

    characterShowcaseState = {
        characterStage: characterStage,
        characterTrack: characterTrack,
        characterItems: [],
        characterSequence: [],
        characterSequenceIndex: 0,
        nextCharacterSequence: null,
        characterGap: Number(CHARACTER_SHOWCASE_DATA.characterGap) || 26,

        badgeStage: badgeStage,
        badgeTrack: badgeTrack,
        badgeItems: [],
        badgeSequence: [],
        badgeSequenceIndex: 0,
        badgeGap: Number(CHARACTER_SHOWCASE_DATA.badgeGap) || 16,

        lastTimestamp: 0,
        badgeLastTimestamp: 0,
        animationFrame: 0,
        badgeAnimationFrame: 0
    };

    const background =
        characterStage.querySelector(".character-stage-background");

    if (background) {
        background.style.backgroundImage =
            `url("${CHARACTER_SHOWCASE_DATA.background}")`;
    }

    buildInitialBadgeItems(characterShowcaseState);
    buildInitialCharacterItems(characterShowcaseState);

    /*
     * 等待首批图片完成一次布局，再开始动画。
     * 如果图片没有 load，也会在短时间后正常启动。
     */
    const start = function () {

        if (!characterShowcaseState) {
            return;
        }

        positionCharacterItems(characterShowcaseState);

        if (!characterShowcaseState.animationFrame) {
            characterShowcaseState.animationFrame =
                requestAnimationFrame(animateCharacterFilm);
        }

        if (!characterShowcaseState.badgeAnimationFrame) {
            characterShowcaseState.badgeAnimationFrame =
                requestAnimationFrame(animateBadgeFilm);
        }
    };

    window.setTimeout(start, 80);

    /*
     * 离开视口时暂停动画，减少用户滚动到其他地点后的 CPU 占用。
     */
    if ("IntersectionObserver" in window) {

        characterShowcaseState.observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            if (!characterShowcaseState.animationFrame) {
                                characterShowcaseState.lastTimestamp = 0;
                                characterShowcaseState.animationFrame =
                                    requestAnimationFrame(animateCharacterFilm);
                            }

                            if (!characterShowcaseState.badgeAnimationFrame) {
                                characterShowcaseState.badgeLastTimestamp = 0;
                                characterShowcaseState.badgeAnimationFrame =
                                    requestAnimationFrame(animateBadgeFilm);
                            }
                        }
                        else {
                            if (characterShowcaseState.animationFrame) {
                                cancelAnimationFrame(characterShowcaseState.animationFrame);
                                characterShowcaseState.animationFrame = 0;
                            }

                            if (characterShowcaseState.badgeAnimationFrame) {
                                cancelAnimationFrame(characterShowcaseState.badgeAnimationFrame);
                                characterShowcaseState.badgeAnimationFrame = 0;
                            }
                        }
                    });
                },
                {
                    rootMargin: "300px 0px"
                }
            );

        characterShowcaseState.observer.observe(characterStage);
    }

    /* 窗口尺寸改变时重新计算人物宽度，但不重置播放顺序。 */
    if (!characterShowcaseState.resizeHandler) {

        characterShowcaseState.resizeHandler =
            function () {
                if (!characterShowcaseState) {
                    return;
                }

                positionCharacterItems(characterShowcaseState);

                characterShowcaseState.badgeItems.forEach(function (item) {
                    item.width = getBadgeSize();
                });
            };

        window.addEventListener(
            "resize",
            characterShowcaseState.resizeHandler
        );
    }
}


// ==========================================================================

// 3. 工具函数
// ==========================================================================


/*
 * 将照片数据统一转换成内部使用的格式。
 *
 * 普通写法：
 *
 *     "001-001"
 *
 * 会自动转换成：
 *
 *     {
 *         file: "001-001",
 *         name: "001-001"
 *     }
 *
 *
 * 对象写法：
 *
 *     {
 *         file: "001-zayumao",
 *         name: "杂鱼猫"
 *     }
 *
 * 则直接使用。
 */
function normalizePhoto(photo) {

    /*
     * 普通字符串写法。
     */
    if (typeof photo === "string") {

        const value = photo.trim();

        if (value === "") {
            return null;
        }

        return {
            file: value,
            name: value
        };

    }


    /*
     * 对象写法。
     */
    if (
        photo &&
        typeof photo === "object"
    ) {

        const file =
            typeof photo.file === "string"
                ? photo.file.trim()
                : "";

        if (file === "") {
            return null;
        }


        /*
         * 如果没有写 name，
         * 自动使用 file。
         *
         * 例如：
         *
         * {
         *     file: "001-003"
         * }
         *
         * 自动显示：
         *
         * 001-003
         */
        const name =
            typeof photo.name === "string" &&
            photo.name.trim() !== ""
                ? photo.name
                : file;


        return {
            file: file,
            name: name
        };

    }


    return null;

}


/*
 * 根据照片文件名生成实际图片路径。
 *
 * 例如：
 *
 *     001-001
 *
 * 会变成：
 *
 *     subpic/001-001.png
 *
 *
 * 注意：
 *
 * 这里使用的是 file，
 * 而不是网页显示的 name。
 */
function getImagePath(file) {

    return `${IMAGE_FOLDER}/${file}.${IMAGE_EXTENSION}`;

}


/*
 * 创建 HTML 时进行基础文字转义。
 *
 * 防止地点名称、说明文字、
 * 照片名称中出现特殊字符导致 HTML 结构异常。
 */
function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


/*
 * 判断照片数据是否有效。
 */
function isValidPhoto(photo) {

    return normalizePhoto(photo) !== null;

}



// ==========================================================================
// 4. 创建页面顶部标题
// ==========================================================================

function createPageHeader() {

    const page =
        SUBPIC_DATA.page || {};


    const title =
        page.title || "拍摄预览";


    const subtitle =
        page.subtitle || "/ Photo Preview";


    const description =
        page.description || "";


    return `

        <header class="page-header">

            <h1 class="page-title">

                ${escapeHTML(title)}

            </h1>


            <div class="page-subtitle">

                ${escapeHTML(subtitle)}

            </div>


            ${
                description
                    ? `

                        <p class="page-description">

                            ${escapeHTML(description)}

                        </p>

                    `
                    : ""
            }

        </header>

    `;

}



// ==========================================================================
// 5. 创建单张照片
// ==========================================================================

function createPhotoCard(photo) {

    /*
     * 先把普通字符串和对象统一处理。
     */
    const photoData =
        normalizePhoto(photo);


    if (!photoData) {
        return "";
    }


    /*
     * file：
     *
     * 真正用于寻找图片文件。
     */
    const file =
        photoData.file;


    /*
     * name：
     *
     * 真正显示在网页上的名字。
     */
    const name =
        photoData.name;


    const safeFile =
        escapeHTML(file);


    const safeName =
        escapeHTML(name);


    const imagePath =
        getImagePath(file);


    return `

        <article
            class="photo-card"
            data-photo-id="${safeFile}"
        >

            <div
                class="photo-frame"
                data-photo-id="${safeFile}"
                tabindex="0"
                role="button"
                aria-label="查看 ${safeName}"
            >

                <img
                    class="photo-image"
                    src="${imagePath}"
                    alt="${safeName}"
                    loading="lazy"
                    decoding="async"
                    data-original-src="${imagePath}"
                    data-photo-id="${safeFile}"
                    data-photo-name="${safeName}"
                >

            </div>


            <div class="photo-id">

                ${safeName}

            </div>

        </article>

    `;

}



// ==========================================================================
// 6. 创建地点区域
// ==========================================================================

function createLocationSection(location) {

    const locationId =
        escapeHTML(
            location.id || ""
        );


    const locationName =
        escapeHTML(
            location.name || "未命名地点"
        );


    const description =
        escapeHTML(
            location.description || ""
        );


    const photos =
        Array.isArray(location.photos)
            ? location.photos
            : [];


    /*
     * 没有照片时，不显示空的地点。
     */
    if (photos.length === 0) {

        return "";

    }


    const photoHTML =

        photos

            .filter(isValidPhoto)

            .map(createPhotoCard)

            .join("");


    return `

        <section
            class="location-section"
            data-location-id="${locationId}"
        >

            <header class="location-header">

                <div class="location-title-row">

                    ${
                        locationId

                            ? `

                                <span class="location-number">

                                    ${locationId}

                                </span>

                            `

                            : ""
                    }


                    <h2 class="location-title">

                        ${locationName}

                    </h2>

                </div>


                ${
                    description

                        ? `

                            <p class="location-description">

                                ${description}

                            </p>

                        `

                        : ""
                }

            </header>


            <div class="photo-grid">

                ${photoHTML}

            </div>

        </section>

    `;

}



// ==========================================================================
// 7. 检查图片是否存在
// ==========================================================================
//
// 正常：
//
//     001-001.png 存在
//          ↓
//     正常显示图片
//
//
// 删除后：
//
//     001-001.png 不存在
//          ↓
//        onerror
//          ↓
//     occupied.png
//
//
// 注意：
//
// 数据本身不会被删除。
//
// 所以你删掉服务器上的图片后，
// 对应照片数据依然存在，
// 只是图片变成 occupied.png。
// ==========================================================================

function setupImageFallbacks() {

    const images =
        document.querySelectorAll(
            ".photo-image"
        );


    images.forEach(function (image) {

        image.addEventListener(

            "error",

            function handleImageError() {

                /*
                 * 防止 occupied.png 本身不存在时无限循环。
                 */
                if (
                    image.dataset.fallbackApplied === "true"
                ) {

                    return;

                }


                image.dataset.fallbackApplied =
                    "true";


                /*
                 * 记录原来的图片路径。
                 */
                image.dataset.originalSrc =
                    image.src;


                /*
                 * 换成占位图。
                 */
                image.src =
                    OCCUPIED_IMAGE;


                /*
                 * 给卡片增加 occupied 状态。
                 */
                const card =
                    image.closest(
                        ".photo-card"
                    );


                if (card) {

                    card.classList.add(
                        "is-occupied"
                    );

                }

            }

        );

    });

}



// ==========================================================================
// 8. Lightbox
// ==========================================================================

let currentLightboxPhotoId = null;


function openLightbox(
    photoName,
    imageSrc
) {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const lightboxImage =
        document.getElementById(
            "lightbox-image"
        );


    const lightboxId =
        document.getElementById(
            "lightbox-id"
        );


    if (
        !lightbox ||
        !lightboxImage ||
        !lightboxId
    ) {

        return;

    }


    currentLightboxPhotoId =
        photoName;


    lightboxImage.src =
        imageSrc;


    lightboxImage.alt =
        photoName;


    lightboxId.textContent =
        photoName;


    lightbox.classList.add(
        "is-open"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
     * 防止弹窗打开后背景网页继续滚动。
     */
    document.body.style.overflow =
        "hidden";

}



// ==========================================================================
// 9. 关闭 Lightbox
// ==========================================================================

function closeLightbox() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const lightboxImage =
        document.getElementById(
            "lightbox-image"
        );


    if (!lightbox) {

        return;

    }


    lightbox.classList.remove(
        "is-open"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    if (lightboxImage) {

        lightboxImage.src = "";

    }


    currentLightboxPhotoId =
        null;


    document.body.style.overflow =
        "";

}



// ==========================================================================
// 10. 绑定图片点击
// ==========================================================================

function setupPhotoClicks() {

    const frames =
        document.querySelectorAll(
            ".photo-frame"
        );


    frames.forEach(function (frame) {

        frame.addEventListener(

            "click",

            function () {

                const card =
                    frame.closest(
                        ".photo-card"
                    );


                /*
                 * 如果图片已经不存在，
                 * 这个卡片只是 occupied 占位。
                 *
                 * 不打开 occupied.png。
                 */
                if (
                    card &&
                    card.classList.contains(
                        "is-occupied"
                    )
                ) {

                    return;

                }


                const image =
                    frame.querySelector(
                        ".photo-image"
                    );


                if (!image) {

                    return;

                }


                /*
                 * 如果图片实际加载失败，
                 * 不打开。
                 */
                if (
                    image.dataset.fallbackApplied === "true"
                ) {

                    return;

                }


                /*
                 * file：
                 *
                 * 用于识别图片本身。
                 */
                const photoFile =
                    image.dataset.photoId;


                /*
                 * name：
                 *
                 * 用于 Lightbox 显示。
                 */
                const photoName =
                    image.dataset.photoName ||
                    photoFile;


                if (!photoFile) {

                    return;

                }


                openLightbox(

                    photoName,

                    image.currentSrc ||
                    image.src

                );

            }

        );


        /*
         * 键盘操作。
         *
         * PC 可以 Tab 到图片，
         * 然后按 Enter / Space 打开。
         */
        frame.addEventListener(

            "keydown",

            function (event) {

                if (
                    event.key !== "Enter" &&
                    event.key !== " "
                ) {

                    return;

                }


                event.preventDefault();


                frame.click();

            }

        );

    });

}



// ==========================================================================
// 11. Lightbox 事件
// ==========================================================================

function setupLightbox() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const closeButton =
        document.getElementById(
            "lightbox-close"
        );


    if (closeButton) {

        closeButton.addEventListener(

            "click",

            closeLightbox

        );

    }


    /*
     * 点击黑色背景关闭。
     *
     * 点击图片本身不会关闭。
     */
    if (lightbox) {

        lightbox.addEventListener(

            "click",

            function (event) {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }

        );

    }


    /*
     * ESC 关闭。
     */
    document.addEventListener(

        "keydown",

        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }

        }

    );

}



// ==========================================================================
// 12. 渲染整个页面
// ==========================================================================

function renderSubpicPage() {

    const app =
        document.getElementById(
            "subpic-app"
        );

    if (!app) {
        console.error("找不到 #subpic-app");
        return;
    }

    /* 页面标题 → 角色胶片 → 000 地点速览 → 其他地点。 */
    let html = createPageHeader();

    html += createCharacterShowcaseSection();

    const locations =
        Array.isArray(SUBPIC_DATA.locations)
            ? SUBPIC_DATA.locations
            : [];

    locations.forEach(function (location) {
        html += createLocationSection(location);
    });

    if (locations.length === 0) {
        html += `
            <div class="error-state">
                <div class="error-title">暂无拍摄预览</div>
                <div class="error-message">当前还没有添加任何拍摄地点。</div>
            </div>
        `;
    }

    app.innerHTML = html;

    setupImageFallbacks();
    setupPhotoClicks();
    initCharacterShowcase();
}


// 13. 页面启动
// ==========================================================================

function initSubpic() {

    try {

        renderSubpicPage();

        setupLightbox();

    }

    catch (error) {

        console.error(
            "subpic 页面初始化失败：",
            error
        );


        const app =
            document.getElementById(
                "subpic-app"
            );


        if (app) {

            app.innerHTML = `

                <div class="error-state">

                    <div class="error-title">

                        拍摄预览暂时无法加载

                    </div>


                    <div class="error-message">

                        页面数据或脚本出现错误，
                        请打开浏览器控制台查看详细信息。

                    </div>

                </div>

            `;

        }

    }

}



// ==========================================================================
// 14. DOM 加载完成后启动
// ==========================================================================

if (
    document.readyState === "loading"
) {

    document.addEventListener(

        "DOMContentLoaded",

        initSubpic

    );

}

else {

    initSubpic();

}

