function getAllWorksWithIcons() {
    // 按阶段分组整理数据
    const worksByStage = {};
    
    worksData.stages.forEach(stage => {
        const stageWorks = stage.works.filter(work => work.icon);
        const workCount = stageWorks.length;
        let currentIndex = workCount;
        
        worksByStage[stage.id] = stageWorks.map(work => ({
            ...work,
            stageId: stage.id,
            indexNumber: currentIndex--
        }));
    });
    
    // 正确的连接顺序
    let allWorks = [];
    const stageIds = Object.keys(worksByStage).sort(); // 按字母顺序排序阶段
    
    stageIds.forEach((stageId) => {
        // 获取当前阶段的所有作品，按indexNumber升序排序（从小到大）
        const stageWorks = worksByStage[stageId].sort((a, b) => a.indexNumber - b.indexNumber);
        allWorks = allWorks.concat(stageWorks);
    });
    
    return allWorks;
}

function generateConnections(works) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.zIndex = "1";

    let pathsHTML = '';

    // 添加起始点到A1的虚线
    const firstWork = works[0]; // A1
    const startX = firstWork.icon.position[0] - 4; // A1左边10%
    const startY = firstWork.icon.position[1] - 2;  // A1下面6%
    pathsHTML += createSVGPath(
        startX, 
        startY, 
        firstWork.icon.position[0], 
        firstWork.icon.position[1], 
        true // 使用虚线
    );

    // 创建其他连线
    for (let i = 0; i < works.length - 1; i++) {
        const currentWork = works[i];
        const nextWork = works[i + 1];

        const x1 = currentWork.icon.position[0];
        const y1 = currentWork.icon.position[1];
        const x2 = nextWork.icon.position[0];
        const y2 = nextWork.icon.position[1];

        // 判断是否是同一阶段
        const isDashed = currentWork.stageId !== nextWork.stageId;

        pathsHTML += createSVGPath(x1, y1, x2, y2, isDashed);
    }

    svg.innerHTML = pathsHTML;
    return svg;
}




function createSVGPath(x1, y1, x2, y2, isDashed) {
    return `<path 
        d="M ${x1} ${y1} L ${x2} ${y2}"
        stroke="black"
        opacity="0.3"
        ${isDashed ? 'stroke-width="2"' : 'stroke-width="4"'}
        ${isDashed ? 'stroke-dasharray="12 6"' : ''}
        fill="none"
        vector-effect="non-scaling-stroke"
    />`;
}


function createIconElement(work) {
    const wrapperElement = document.createElement('div');
    wrapperElement.className = 'icon-wrapper';
    wrapperElement.style.left = `${work.icon.position[0]}%`;
    wrapperElement.style.top = `${work.icon.position[1]}%`;
    wrapperElement.style.cursor = 'default'; // 确保默认光标

    // 创建canvas元素并设置样式
    const canvas = document.createElement('canvas');
    canvas.width = 48;
    canvas.height = 48;
    canvas.style.cursor = 'default'; // 确保默认光标

    wrapperElement.appendChild(canvas);
    
    // 初始化Paper.js
    const paperScope = new paper.PaperScope();
    paperScope.setup(canvas);
    
    // 创建形状
    const shape = createShape(work.icon.shape, work.icon.fill, work.icon.dashed, work.icon.skewed);
    
    // 确保形状居中
    paperScope.view.center = new paperScope.Point(0, 0);
    
    // 确保绘制
    paperScope.view.draw();

    // 创建文本并设置样式
    const textElement = document.createElement('div');
    textElement.className = 'work-text';
    textElement.textContent = `${work.stageId}${work.indexNumber}`;
    textElement.style.color = `${work.icon.fill === 'black' ? 'white' : 'black'}`;
    textElement.style.cursor = 'default'; // 确保默认光标
    
    wrapperElement.appendChild(textElement);

    return wrapperElement;
}


const descriptionBox = document.createElement('div');
descriptionBox.className = 'hover-description';
document.body.appendChild(descriptionBox);

// ========== Touch Device Logic Helpers ==========
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
let activeWorkId = null;

function showWorkDescription(wrapper, workId, works) {
    const work = works.find(w => w.id === workId);
    if (!work) return;

    // 显示悬停描述
    descriptionBox.innerHTML = `
        <p>${work.title} <br><br></p>
        <p>${work.description}</p>
    `;

    // 横向自适应
    if (work.icon.position[0] >= 50) {
        descriptionBox.style.left = '32px';
        descriptionBox.style.right = 'auto';
    } else {
        descriptionBox.style.right = '32px';
        descriptionBox.style.left = 'auto';
    }

    // 纵向自适应
    if (work.icon.position[1] >= 50) {
        descriptionBox.style.bottom = 'calc(50% + 32px)';
        descriptionBox.style.top = 'auto';
    } else {
        descriptionBox.style.top = 'calc(50% - 4px)';
        descriptionBox.style.bottom = 'auto';
    }
    descriptionBox.style.display = 'block';

    // 显示悬停内容
    const hoverContent = wrapper.querySelector('.hover-content');
    if (hoverContent) {
        hoverContent.style.display = 'block';
        if (work.icon.position[1] >= 50) {
            hoverContent.style.bottom = '100%';
            hoverContent.style.top = 'auto';
        } else {
            hoverContent.style.top = '100%';
            hoverContent.style.bottom = 'auto';
        }
    }
}

function hideWorkDescription(wrapper) {
    descriptionBox.style.display = 'none';
    const hoverContent = wrapper.querySelector('.hover-content');
    if (hoverContent) {
        hoverContent.style.display = 'none';
    }
}
// ================================================

function createDotElement(position) {
    const dotElement = document.createElement('div');
    dotElement.style.position = 'absolute';
    dotElement.style.left = `${position[0]}%`;
    dotElement.style.top = `${position[1]}%`;
    dotElement.style.transform = 'translate(-50%, -50%)';
    dotElement.style.width = '12px';
    dotElement.style.height = '12px';
    dotElement.style.backgroundColor = '#555';
    dotElement.style.borderRadius = '50%';
    dotElement.style.opacity = '0.8';
    dotElement.style.zIndex = '2';
    return dotElement;
}

function generateIcons() {
    const iconContainer = document.getElementById('icon-container');
    const works = getAllWorksWithIcons();

    // 首先添加SVG连线
    const connectionsElement = generateConnections(works);
    iconContainer.appendChild(connectionsElement);
    
    // 为每个作品创建圆点
    works.forEach(work => {
        const dotElement = createDotElement(work.icon.position);
        iconContainer.appendChild(dotElement);
    });
    
    works.forEach(work => {
        const wrapperElement = createIconElement(work);

        // 创建悬停内容容器
        const hoverContent = document.createElement('div');
        hoverContent.className = 'hover-content';
        
        // 根据work.hover的内容创建对应元素
        if (work.hover) {
            // 直接设置HTML内容
            hoverContent.innerHTML = work.hover;
            
            // 如果包含img标签，设置图片加载后的尺寸
            const img = hoverContent.querySelector('img');
            if (img) {
                img.onload = function() {
                    const ratio = this.naturalHeight / this.naturalWidth;
                    if (ratio > 1) {
                        this.style.width = '108px'; // 竖图设置较小的宽度
                    } 
                    if (ratio < 1) {
                        this.style.width = '168px'; // 横图设置较大的宽度
                    } 
                    if (ratio === 1) {
                        this.style.width = '136px'; // 正方形图设置较大的宽度
                    }
                };
            }
            
            // 如果包含iframe标签，可以设置iframe的尺寸
            const iframe = hoverContent.querySelector('iframe');
            if (iframe) {
                iframe.style.width = '140px';
                iframe.style.height = '90px'; // 或者根据需要设置其他尺寸
            }
        }

        wrapperElement.appendChild(hoverContent);
        
        // 修改点击事件：将事件绑定到wrapper上，并使用data属性存储work.id
        wrapperElement.setAttribute('data-work-id', work.id);
        wrapperElement.addEventListener('click', function(e) {
            e.preventDefault();
            const workId = this.getAttribute('data-work-id');
            
            if (isTouchDevice) {
                if (activeWorkId === workId) {
                    // 如果已经是激活状态，则跳转
                    window.location.href = `template.html?work=${workId}&from=map`;
                } else {
                    // 如果不是激活状态，则激活（模拟Hover）
                    e.stopPropagation(); // 防止冒泡到全局点击事件
                    
                    // 清除其他图标的激活状态
                    document.querySelectorAll('.icon-wrapper.active').forEach(el => {
                        el.classList.remove('active');
                        hideWorkDescription(el);
                    });
                    
                    this.classList.add('active');
                    activeWorkId = workId;
                    showWorkDescription(this, workId, works);
                }
            } else {
                // 非触摸设备，直接跳转
                window.location.href = `template.html?work=${workId}&from=map`;
            }
        });

        // 绑定悬停事件
        wrapperElement.addEventListener('mouseover', function(e) {
            if (isTouchDevice) return; // 触摸设备忽略 mouseover
            
            e.preventDefault();
            this.style.cursor = 'default'; // 确保悬停时仍然是默认光标
            const workId = this.getAttribute('data-work-id');
            showWorkDescription(this, workId, works);
        });

        wrapperElement.addEventListener('mouseleave', function(e) {
            if (isTouchDevice) return; // 触摸设备忽略 mouseleave
            
            hideWorkDescription(this);
        });
        
        iconContainer.appendChild(wrapperElement);
    });
}




// 页面加载时生成图标
document.addEventListener('DOMContentLoaded', generateIcons);

// Global click listener for Touch Devices to clear active state
if (isTouchDevice) {
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.icon-wrapper')) {
            document.querySelectorAll('.icon-wrapper.active').forEach(el => {
                el.classList.remove('active');
                hideWorkDescription(el);
            });
            activeWorkId = null;
        }
    });
}