console.log("generateList.js loaded");

// 在生成作品列表的代码中
function createWorkLink(work) {
    const link = document.createElement('a');
    link.href = `template.html?work=${work.id}&from=list`;
    // ... 其他链接设置代码
    return link;
}

console.log("generateList.js loaded");

function generateList() {
    console.log("Generating list...");
    const listSection = document.getElementById('list');
    let listHTML = `
        <div class="container">
            <div class="copyright" style="position: fixed; top: 20px; left: 20px; z-index: 1000;">
                <a class="eng">© 2025 <NAME>Yixi(Chris) Wu</NAME></a>
            </div>
            <div class="list-container">
    `;

    worksData.stages.forEach(stage => {
        listHTML += `
            <div class="stage-title">
                ${stage.id}
            </div>
        `;

        stage.works.forEach(work => {
            const isCurrentWork = getCurrentWorkId() === work.id;
            // 为每个list-item添加唯一的data属性
            listHTML += `
            <div class="list-item" data-work-id="${work.id}" onclick="window.location.href='template.html?work=${work.id}&from=list'">
                <div class="list-item-icon ${isCurrentWork ? 'current-icon' : ''}">
                    <canvas width="24" height="24"></canvas>
                </div>
                <div class="list-item-title">
                    <a class="${isCurrentWork ? 'current' : ''}">${work.listTitle}</a>
                </div>
            </div>
            `;
        });
    });

    listHTML += `
            </div>
        </div>
    `;

    listSection.innerHTML = listHTML;

    // 在HTML插入后初始化所有canvas
    worksData.stages.forEach(stage => {
        stage.works.forEach(work => {
            if (work.icon) {
                // 使用data属性来查找元素
                const listItem = document.querySelector(`[data-work-id="${work.id}"]`);
                if (listItem) {
                    const canvas = listItem.querySelector('canvas');
                    
                    // 初始化Paper.js
                    const paperScope = new paper.PaperScope();
                    paperScope.setup(canvas);
                    
                    // 创建形状
                    const shape = createShape(work.icon.shape, work.icon.fill, work.icon.dashed, work.icon.skewed);
                    
                    // 移动形状到canvas中心
                    if (shape) {
                        shape.position = paperScope.view.center;
                    }
                    
                    // 确保绘制
                    paperScope.view.draw();
                }
            }
        });
    });
}

function getCurrentWorkId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('work') || 'bread-reader';
}