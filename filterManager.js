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

// ========== 获取各层 tags ==========
const filterTagsLine1 = document.querySelectorAll('#filter-line1 > div');
const filterTagsLine2 = document.querySelectorAll('#filter-line2 > div');
const filterTagsLine3 = document.querySelectorAll('#filter-line3 > div');
const selectAllButton = document.getElementById('filter-line4-item1');
const clearButton = document.getElementById('filter-line4-item2');

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
[...filterTagsLine1, ...filterTagsLine2, ...filterTagsLine3].forEach(tag => {
    tag.addEventListener('click', () => {
        if (tag.classList.contains('disabled')) return;
        if (selectedTags.has(tag.id)) {
            selectedTags.delete(tag.id);
        } else {
            selectedTags.add(tag.id);
        }
        updateTagStyle(tag);
        updateDisabledTags();
        [...filterTagsLine1, ...filterTagsLine2, ...filterTagsLine3].forEach(updateTagStyle);
        updateMapIcons();
    });
});

let clearStep = 0; // 0: Others, 1: line3, 2: line2, 3: line1

clearButton.addEventListener('click', () => {
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
});

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

selectAllButton.addEventListener('click', selectAllTags);

// 在初始化和其它操作时也可重置 clearStep
clearStep = 0;

// 初始化：更新所有标签的样式和禁用状态
[...filterTagsLine1, ...filterTagsLine2, ...filterTagsLine3].forEach(updateTagStyle);
updateDisabledTags();
updateMapIcons(); 