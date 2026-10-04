// tree flipping

const treeContainers = [];
for (let i = 1; i <= 3; i++) {
    treeContainers.push(document.getElementById(`tree${i}`));
}

const treeStructures = [
    [2, 3, 2, 6, 5, 4, 5],
    [2, 3, 2, 5, 3],
    [2, 4, 0, 3, 2]
]

const treePositions = [
    {left: '18.5%', top: '40%'},
    {left: '70.5%', top: '60%'},
];

function getTree2Position() {
    // 插入 tree2 的位置，使用 JavaScript 进行计算
    const tree1Position = treePositions[0];
    const tree1Left = parseFloat(tree1Position.left) / 100 * window.innerWidth; // 转换为像素
    const tree1Top = parseFloat(tree1Position.top) / 100 * window.innerHeight; // 转换为像素

    // 计算 tree2 的位置
    const tree2Left = tree1Left + 118; // 向右偏移 x 像素
    const tree2Top = tree1Top - 72; // 向上偏移 y 像素

    // 将计算结果转换回百分比
    const tree2LeftPercent = (tree2Left / window.innerWidth) * 100 + '%';
    const tree2TopPercent = (tree2Top / window.innerHeight) * 100 + '%';

    return {left: tree2LeftPercent, top: tree2TopPercent};
}


treePositions.splice(1, 0, getTree2Position());

console.log(treePositions);

function createTreeGrid(treeContainer, treeStructure, treePosition, treeIconSrc) {
    for (let i = 0; i < treeStructure.length; i++) {
        const treeRow = document.createElement('div');
        treeRow.classList.add('tree-row');
        treeRow.style.display = 'flex';

        if (treeStructure[i] === 0) {
            const emptySpace = document.createElement('div');
            emptySpace.style.width = '20px';
            emptySpace.style.aspectRatio = '1';
            emptySpace.classList.add('empty-space');
            treeRow.appendChild(emptySpace);
        }

        for (let j = 0; j < treeStructure[i]; j++) {
            const treeIcon = document.createElement('img');
            treeIcon.classList.add('tree-icon');
            treeIcon.src = treeIconSrc;
            treeRow.appendChild(treeIcon);
        }

        treeContainer.appendChild(treeRow);
    }
    treeContainer.style.left = treePosition.left;
    treeContainer.style.top = treePosition.top;
}

function treeClick(treeContainer) {
    treeContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('tree-icon')) {
        const treeIcons = treeContainer.querySelectorAll('.tree-icon');

        for (let i = 0; i < treeIcons.length; i++) {
            setTimeout(() => {
            treeIcons[i].classList.add('flip');

            treeIcons[i].src = treeIcons[i].src.includes('Coniferous')
                ? './icon/Deciduous Tree.svg'
                : './icon/Coniferous Tree.svg';

            setTimeout(() => {
                treeIcons[i].classList.remove('flip');
            }, 60);
            }, i * 25);
        }
        }
    });
}

for (let i = 0; i < treeContainers.length; i++) {
    if (i === 1) {
        createTreeGrid(treeContainers[i], treeStructures[i], treePositions[i], `./icon/Deciduous Tree.svg`);
    }
    else {
        createTreeGrid(treeContainers[i], treeStructures[i], treePositions[i], `./icon/Coniferous Tree.svg`);
    }
    
    treeClick(treeContainers[i]);
}
