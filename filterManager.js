// ========== 手动维护三层 tag-to-works 映射 ==========
const tagToWorksMapLine1 = {
    'filter-line1-item1': ['piko', 'banana-exoskeleton', 'bread-reader', 'rethinking-rabbit-r1', 'more-dance', 'lino', 'recurv', 'glance-t1'],
    'filter-line1-item2': ['rethinking-rabbit-r1', 'playground-os', 'lino'],
    'filter-line1-item3': ['piko', 'banana-exoskeleton', 'bread-reader', 'rethinking-rabbit-r1', 'more-dance', 'playground-os', 'lino'],
    'filter-line1-item4': ['vive-towers', 'parade-with-gods', 'go-above-or-below', 'aurora-house'],
    'filter-line1-item5': ['boba-bubble-trouble', 'story-machine'],
    'filter-line1-item6': ['hill-making'],
};
const tagToWorksMapLine2 = {
    'filter-line2-item1': ['piko', 'banana-exoskeleton', 'bread-reader', 'rethinking-rabbit-r1', 'playground-os', 'more-dance', 'lino', 'vive-towers', 'parade-with-gods', 'go-above-or-below', 'aurora-house', 'hill-making', 'recurv', 'glance-t1', 'boba-bubble-trouble', 'story-machine', ],
    'filter-line2-item2': ['piko', 'banana-exoskeleton', 'bread-reader', 'boba-bubble-trouble', 'story-machine'],
    'filter-line2-item3': ['hill-making', 'recurv', 'parade-with-gods'],
    'filter-line2-item4': ['piko', 'banana-exoskeleton', 'bread-reader'],
    'filter-line2-item5': ['aurora-house'],
};
const tagToWorksMapLine3 = {
    'filter-line3-item1': ['banana-exoskeleton', 'vive-towers'],
    'filter-line3-item2': ['lino'],
    'filter-line3-item3': ['rethinking-rabbit-r1', 'playground-os'],
    'filter-line3-item4': ['piko', 'rethinking-rabbit-r1', 'playground-os', 'lino', 'story-machine', 'bread-reader'],
    'filter-line3-item5': ['piko', 'hill-making', 'recurv'],
    'filter-line3-item6': ['piko'],
    'filter-line3-item7': [],
    'filter-line3-item8': ['playground-os', 'aurora-house'],
    'filter-line3-item9': ['more-dance'],
    'filter-line3-item10': ['parade-with-gods', 'go-above-or-below', 'boba-bubble-trouble', 'glance-t1'] // Others
};

// ========== 触摸设备检测与处理 ==========
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// 在触摸设备上，添加touchend事件处理，清除可能的hover状态
if (isTouchDevice) {
    const clearHoverState = (event) => {
        // 如果点击的不是filter标签，则清除所有filter标签的可能hover状态
        if (!event.target.closest('#filter-container')) {
            document.querySelectorAll('.filter-tag, #filter-container #filter-line4 div').forEach(tag => {
                // 强制移除可能的hover视觉效果
                tag.classList.remove('hover-state');
                tag.classList.remove('touch-active');
                
                // 以下是用于IE/Safari等浏览器的trick
                // 临时切换display以重置hover状态
                const oldDisplay = tag.style.display;
                tag.style.display = 'none';
                // 触发重绘
                tag.offsetHeight;
                tag.style.display = oldDisplay;
            });
        }
    };
    
    // 监听整个文档的触摸结束事件
    document.addEventListener('touchend', clearHoverState);
    
    // 为所有filter标签添加触摸开始和触摸结束事件
    [...filterTagsLine1, ...filterTagsLine2, ...filterTagsLine3, selectAllButton, clearButton].forEach(tag => {
        tag.addEventListener('touchstart', () => {
            // 清除其他标签可能的hover状态
            document.querySelectorAll('.filter-tag, #filter-container #filter-line4 div').forEach(t => {
                if (t !== tag) {
                    t.classList.remove('touch-active');
                }
            });
            
            // 添加活动状态类
            if (!tag.classList.contains('disabled')) {
                tag.classList.add('touch-active');
            }
        });
        
        tag.addEventListener('touchend', () => {
            // 延迟移除活动状态类，以便用户看到反馈
            setTimeout(() => {
                tag.classList.remove('touch-active');
            }, 100);
        });
    });
}

// ========== 状态 ==========
let selectedTags = new Set();

// 初始化：全部选中
[...filterTagsLine1, ...filterTagsLine2, ...filterTagsLine3].forEach(tag => {
    selectedTags.add(tag.id);
    tag.classList.add('filter-tag', 'selected');
});

// ========== 联动禁用逻辑 ==========
function updateDisabledTags() {
    // 1. 计算 line1 当前选中的作品合集
    let worksLine1 = new Set();
    filterTagsLine1.forEach(tag => {
        if (selectedTags.has(tag.id)) {
            (tagToWorksMapLine1[tag.id] || []).forEach(w => worksLine1.add(w));
        }
    });
    // 2. line2 只保留与 line1 交集的 tag
    filterTagsLine2.forEach(tag => {
        const works = tagToWorksMapLine2[tag.id] || [];
        const hasIntersection = works.some(w => worksLine1.has(w));
        if (hasIntersection) {
            if (tag.classList.contains('disabled')) {
                tag.classList.remove('disabled');
                if (!selectedTags.has(tag.id)) {
                    selectedTags.add(tag.id);
                }
            } else {
                tag.classList.remove('disabled');
            }
        } else {
            tag.classList.add('disabled');
            selectedTags.delete(tag.id);
        }
    });
    // 3. 计算 line2 当前选中的作品合集
    let worksLine2 = new Set();
    filterTagsLine2.forEach(tag => {
        if (selectedTags.has(tag.id) && !tag.classList.contains('disabled')) {
            (tagToWorksMapLine2[tag.id] || []).forEach(w => worksLine2.add(w));
        }
    });
    // 4. line3 只保留与 line1+line2 交集的 tag
    filterTagsLine3.forEach(tag => {
        const works = tagToWorksMapLine3[tag.id] || [];
        const hasIntersection = works.some(w => worksLine1.has(w) && worksLine2.has(w));
        if (hasIntersection) {
            if (tag.classList.contains('disabled')) {
                tag.classList.remove('disabled');
                if (!selectedTags.has(tag.id)) {
                    selectedTags.add(tag.id);
                }
            } else {
                tag.classList.remove('disabled');
            }
        } else {
            tag.classList.add('disabled');
            selectedTags.delete(tag.id);
        }
    });
}

// ========== 更新 map icons 的显示状态 ==========
function updateMapIcons() {
    const workIcons = document.querySelectorAll('.icon-wrapper');
    if (selectedTags.size === 0) {
        workIcons.forEach(icon => {
            icon.style.visibility = 'hidden';
        });
        return;
    }
    // 统计所有应该显示的 work IDs
    const visibleWorkIds = new Set();
    // 只有 line1/line2/line3 都被选中的作品才显示
    let worksLine1 = new Set();
    filterTagsLine1.forEach(tag => {
        if (selectedTags.has(tag.id)) {
            (tagToWorksMapLine1[tag.id] || []).forEach(w => worksLine1.add(w));
        }
    });
    let worksLine2 = new Set();
    filterTagsLine2.forEach(tag => {
        if (selectedTags.has(tag.id) && !tag.classList.contains('disabled')) {
            (tagToWorksMapLine2[tag.id] || []).forEach(w => worksLine2.add(w));
        }
    });
    let worksLine3 = new Set();
    filterTagsLine3.forEach(tag => {
        if (selectedTags.has(tag.id) && !tag.classList.contains('disabled')) {
            (tagToWorksMapLine3[tag.id] || []).forEach(w => worksLine3.add(w));
        }
    });
    // 取三层交集
    worksLine1.forEach(w => {
        if (worksLine2.has(w) && worksLine3.has(w)) {
            visibleWorkIds.add(w);
        }
    });
    workIcons.forEach(icon => {
        const workId = icon.getAttribute('data-work-id');
        icon.style.visibility = visibleWorkIds.has(workId) ? 'visible' : 'hidden';
    });
}

// ========== 更新 tag 的样式 ==========
function updateTagStyle(tag) {
    if (selectedTags.has(tag.id)) {
        tag.classList.add('selected');
        tag.classList.remove('unselected');
    } else {
        tag.classList.remove('selected');
        tag.classList.add('unselected');
    }
}

// ========== 事件绑定 ==========
function toggleTag(tag) {
    if (tag.classList.contains('disabled')) return;
    
    // 切换选中状态
    if (selectedTags.has(tag.id)) {
        selectedTags.delete(tag.id);
    } else {
        selectedTags.add(tag.id);
    }
    
    // 更新视觉样式和状态
    updateTagStyle(tag);
    updateDisabledTags();
    [...filterTagsLine1, ...filterTagsLine2, ...filterTagsLine3].forEach(updateTagStyle);
    updateMapIcons();
}

[...filterTagsLine1, ...filterTagsLine2, ...filterTagsLine3].forEach(tag => {
    // 1. 始终绑定 click 事件，确保鼠标交互（以及未被拦截的触摸交互）正常工作
    tag.addEventListener('click', (e) => {
        // 如果是触摸设备触发的 click（未被 preventDefault），也正常处理
        toggleTag(tag);
    });

    // 2. 如果是触摸设备，绑定 touch 事件以获得更好体验（无延迟，Active状态）
    if (isTouchDevice) {
        tag.addEventListener('touchend', (e) => {
            // 阻止默认行为，防止触发 click (避免双重触发)
            e.preventDefault();
            
            toggleTag(tag);
            
            // 移除活动状态类
            tag.classList.remove('touch-active');
        });
    }
});

let clearStep = 0; // 0: Others, 1: line3, 2: line2, 3: line1

// 定义clear按钮的处理函数
function handleClearButton() {
    if (clearStep === 0) {
        // 清空 Others（filter-line3-item10）
        const othersTag = document.getElementById('filter-line3-item10');
        if (othersTag) {
            selectedTags.delete(othersTag.id);
            updateTagStyle(othersTag);
        }
        clearStep = 1;
    } else if (clearStep === 1) {
        // 清空 line3 其它 tag
        [...filterTagsLine3].forEach(tag => {
            if (tag.id !== 'filter-line3-item10') {
                selectedTags.delete(tag.id);
                updateTagStyle(tag);
            }
        });
        clearStep = 2;
    } else if (clearStep === 2) {
        // 清空 line2
        filterTagsLine2.forEach(tag => {
            selectedTags.delete(tag.id);
            updateTagStyle(tag);
        });
        clearStep = 3;
    } else if (clearStep === 3) {
        // 清空 line1
        filterTagsLine1.forEach(tag => {
            selectedTags.delete(tag.id);
            updateTagStyle(tag);
        });
        clearStep = 4;
    } else {
        // 已全部清空，不再变化
    }
    updateDisabledTags();
    updateMapIcons();
}

// 为桌面和移动设备分别绑定事件
if (isTouchDevice) {
    clearButton.addEventListener('touchend', (e) => {
        e.preventDefault(); // 阻止默认行为
        handleClearButton();
        
        // 移除活动状态类
        clearButton.classList.remove('touch-active');
    });
} else {
    clearButton.addEventListener('click', handleClearButton);
}

function selectAllTags() {
    clearStep = 0;
    [...filterTagsLine1, ...filterTagsLine2, ...filterTagsLine3].forEach(tag => {
        selectedTags.add(tag.id);
        tag.classList.add('selected');
        tag.classList.remove('unselected');
    });
    updateDisabledTags();
    updateMapIcons();
}

// 为桌面和移动设备分别绑定事件
if (isTouchDevice) {
    selectAllButton.addEventListener('touchend', (e) => {
        e.preventDefault(); // 阻止默认行为
        selectAllTags();
        
        // 移除活动状态类
        selectAllButton.classList.remove('touch-active');
    });
} else {
    selectAllButton.addEventListener('click', selectAllTags);
}

// 在初始化和其它操作时也可重置 clearStep
clearStep = 0;

// 初始化：更新所有标签的样式和禁用状态
[...filterTagsLine1, ...filterTagsLine2, ...filterTagsLine3].forEach(updateTagStyle);
updateDisabledTags();
updateMapIcons(); 