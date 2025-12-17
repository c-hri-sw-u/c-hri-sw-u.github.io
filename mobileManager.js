// mobileManager.js
// 移动端体验管理 (Mobile Experience Manager)

document.addEventListener('DOMContentLoaded', function() {
    // 简单的移动端检测 (宽度 < 768px 或 userAgent)
    const isMobile = window.innerWidth <= 768 || 
                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        initMobileView();
    }
});

function initMobileView() {
    console.log('Initializing Mobile View...');
    document.body.classList.add('mobile-view');

    // 1. 隐藏/调整不必要的桌面端元素
    const filterContainer = document.getElementById('filter-container');
    if (filterContainer) filterContainer.style.display = 'none';

    // 2. 调整地图样式 (Mini Map)
    initMiniMap();

    // 3. 生成精选作品列表
    generateFeatureWorksList();
}

function initMiniMap() {
    const mapContainer = document.getElementById('map'); // 或者 wrapper
    if (!mapContainer) return;

    // 保持地图在后台，但在右下角可见
    // 具体的样式通过 CSS 类 .mobile-view #map 控制
    // 这里可以添加一些交互逻辑，比如禁止拖动等
    
    // 如果使用了 panzoom 或其他库，可能需要在这里禁用
    // 假设 drawMapIcons.js 或其他脚本处理了地图绘制
}

function generateFeatureWorksList() {
    // 创建列表容器
    let listContainer = document.getElementById('mobile-feature-list');
    if (!listContainer) {
        listContainer = document.createElement('div');
        listContainer.id = 'mobile-feature-list';
        document.body.appendChild(listContainer);
    }

    // 获取作品数据
    // 假设 worksData 已经在 works.js 中定义
    if (typeof worksData === 'undefined' || typeof featureWorks === 'undefined') {
        console.warn('worksData or featureWorks not loaded');
        return;
    }

    const allWorks = [];
    worksData.stages.forEach(stage => {
        stage.works.forEach(work => {
            allWorks.push(work);
        });
    });

    let listHTML = `
        <div class="mobile-header">
            <h1>Feature Works</h1>
        </div>
        <div class="works-scroll-container">
    `;

    featureWorks.forEach(workId => {
        const work = allWorks.find(w => w.id === workId);
        if (work) {
            listHTML += `
                <div class="mobile-work-item" data-work-id="${work.id}" onclick="handleMobileWorkClick(this, '${work.id}')">
                    <div class="work-info">
                        <h2>${work.listTitle || work.title}</h2>
                        <p>${work.subtitle || ''}</p>
                    </div>
                    <div class="work-arrow">→</div>
                </div>
            `;
        }
    });

    listHTML += `</div>`; // Close container

    // 添加 Contact 入口
    listHTML += `
        <div class="mobile-footer-links">
            <a href="#contact-page" onclick="document.getElementById('contact-page').scrollIntoView({behavior: 'smooth'})">Contact</a>
        </div>
    `;

    listContainer.innerHTML = listHTML;
}

// 处理点击事件
window.handleMobileWorkClick = function(element, workId) {
    // 1. 高亮列表项
    document.querySelectorAll('.mobile-work-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

    // 2. 小地图联动：放大对应图标
    highlightMapIcon(workId);

    // 3. 延迟跳转 (给用户一点时间看地图反馈)
    // 或者：如果是“展开”模式，则不跳转。
    // 根据用户需求：“打开一个work，小地图上相应位置的图标就会放大”。
    // 这里我们假设点击就是“打开”，然后跳转。
    // 为了展示效果，我们延迟 800ms 跳转
    setTimeout(() => {
        window.location.href = `template.html?work=${workId}&from=mobile_list`;
    }, 800);
};

function highlightMapIcon(workId) {
    // 需要找到对应的地图图标元素
    // 假设 drawMapIcons.js 生成了带有 data-work-id 的 .icon-wrapper 元素
    const iconWrapper = document.querySelector(`.icon-wrapper[data-work-id="${workId}"]`);
    
    // 重置其他图标
    document.querySelectorAll('.icon-wrapper').forEach(el => {
        el.style.transform = '';
        el.style.zIndex = '';
        el.style.filter = '';
    });

    if (iconWrapper) {
        // 放大并高亮
        // 保存原始 transform (如果还没保存过)
        if (!iconWrapper.dataset.originalTransform) {
            iconWrapper.dataset.originalTransform = iconWrapper.style.transform;
        }
        
        // 强制放大
        // 注意：父容器 #map 已经被 scale(0.3) 了，所以这里需要放大更多倍才能看清
        // 比如放大 4 倍
        // 我们需要解析原始的 translate 值，保持位置不变
        const originalTransform = iconWrapper.dataset.originalTransform;
        
        // 简单的正则提取 translate
        // 假设 transform 格式为 "translate(x, y) ..."
        // 如果我们直接追加 scale，顺序很重要
        
        iconWrapper.style.transform = `${originalTransform} scale(4)`;
        iconWrapper.style.zIndex = '1000';
        iconWrapper.style.filter = 'drop-shadow(0 0 5px rgba(0,0,0,0.5))';
        
        iconWrapper.classList.add('mobile-highlight');
    }
}
