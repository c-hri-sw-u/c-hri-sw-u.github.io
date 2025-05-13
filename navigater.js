document.addEventListener('DOMContentLoaded', function() {
    // 获取导航元素
    const backBtn = document.getElementById('back');
    const nextBtn = document.getElementById('next');
    const fullmapBtn = document.getElementById('fullmap');

    // 获取当前作品ID和来源页面
    const urlParams = new URLSearchParams(window.location.search);
    const currentWorkId = urlParams.get('work');
    const fromList = urlParams.get('from') === 'list';

    // 确保 worksData 已加载
    if (typeof worksData === 'undefined') {
        console.warn('worksData is not loaded yet, navigation features may be limited');
        return;
    }

    // 获取展平的作品列表
    const allWorks = getAllWorks();
    const currentIndex = allWorks.findIndex(work => work.id === currentWorkId);

    // 初始化历史记录
    initializeHistory();

    // 获取或初始化访问历史
    let visitHistory = JSON.parse(sessionStorage.getItem('workVisitHistory') || '[]');

    // 处理从列表点击进入的情况
    if (fromList) {
        // 获取上一个历史记录
        const previousHistory = JSON.parse(sessionStorage.getItem('workVisitHistory') || '[]');
        
        // 如果当前作品已经在历史记录中，删除它之后的所有记录
        const existingIndex = previousHistory.indexOf(currentWorkId);
        if (existingIndex !== -1) {
            visitHistory = previousHistory.slice(0, existingIndex + 1);
        } else {
            // 如果是新的作品，将其添加到历史记录中
            visitHistory = [...previousHistory, currentWorkId];
        }
    } else {
        const currentPageIndex = visitHistory.indexOf(currentWorkId);
        if (currentPageIndex !== -1) {
            visitHistory = visitHistory.slice(0, currentPageIndex + 1);
        } else {
            visitHistory.push(currentWorkId);
        }
    }

    // 更新 sessionStorage
    sessionStorage.setItem('workVisitHistory', JSON.stringify(visitHistory));
    sessionStorage.setItem('currentWorkIndex', currentIndex.toString());

    // 返回按钮
    backBtn.addEventListener('click', function() {
        const history = JSON.parse(sessionStorage.getItem('workVisitHistory') || '[]');
        if (history.length > 1) {
            history.pop(); // 移除当前页面
            const previousWorkId = history[history.length - 1];
            sessionStorage.setItem('workVisitHistory', JSON.stringify(history));
            window.location.href = `template.html?work=${previousWorkId}`;
        } else {
            window.location.href = 'index.html';
        }
    });

    // 下一个按钮
    nextBtn.addEventListener('click', function() {
        if (currentIndex < allWorks.length - 1) {
            const nextWork = allWorks[currentIndex + 1];
            visitHistory.push(nextWork.id);
            sessionStorage.setItem('workVisitHistory', JSON.stringify(visitHistory));
            window.location.href = `template.html?work=${nextWork.id}`;
        }
    });

    // 全地图按钮
    fullmapBtn.addEventListener('click', function() {
        sessionStorage.removeItem('workVisitHistory');
        sessionStorage.removeItem('currentWorkIndex');
        window.location.href = 'index.html';
    });

    // 更新按钮状态
    updateNavigationButtons();
});

// 辅助函数：获取展平的作品列表
function getAllWorks() {
    if (typeof worksData === 'undefined') {
        console.warn('worksData is not available');
        return [];
    }
    
    const allWorks = [];
    worksData.stages.forEach(stage => {
        stage.works.forEach(work => {
            allWorks.push({
                ...work,
                stageId: stage.id,
                stageName: stage.name
            });
        });
    });
    return allWorks;
}

// 在页面加载时初始化历史记录
function initializeHistory() {
    // 如果是从index.html直接访问作品页面，清除之前的历史记录
    if (document.referrer.includes('index.html')) {
        sessionStorage.removeItem('workVisitHistory');
    }
}

function updateNavigationButtons() {
    if (typeof worksData === 'undefined') {
        console.warn('worksData is not available, navigation buttons may not update correctly');
        return;
    }
    
    const currentIndex = parseInt(sessionStorage.getItem('currentWorkIndex') || '0');
    const allWorks = getAllWorks();
    const nextBtnText = document.querySelector('#next a');
    
    // 仅当是最后一个作品时，给next按钮文字添加删除线
    if (currentIndex === allWorks.length - 1) {
        nextBtnText.style.textDecoration = 'line-through';
    } else {
        nextBtnText.style.textDecoration = 'none';
    }
}