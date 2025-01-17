const iDesignContainer = document.getElementById("design");
const iMakeContainer = document.getElementById("make");
const iStudyContainer = document.getElementById("study");
const iPlayWithContainer = document.getElementById("play-with");

var iDesignText = [
    "Space",
    "Architecture",
    "Interior",
    "Furniture",
    "Web",
    "Product",
    "Graphic",
    "UIUX",
    "Interaction",
]

var iMakeText = [
    "Game",
    "App",
    "Website",
    "Product",
    "Experience",
    "Video",
]

var iStudyText = [
    "HCI",
    "AI",
    "Machine Learning",
    "Data Science",
    "Algorithms",
    "Psychology",
    "Philosophy",
    "Economics",
    "History",
    "Art",
    "Crafts",
]

var iPlayWithText = [
    "3D Printing",
    "Arduino",
    "LLM",
]

function createRollingText(container, textArray) {
    container.style.height = "1.2em";
    container.style.overflow = "hidden";
    container.style.position = "relative";

    const wrapper = document.createElement("div");
    wrapper.style.position = "absolute";
    wrapper.style.width = "100%";
    wrapper.style.transition = "transform 0.5s ease-in-out";
    container.appendChild(wrapper);

    // 创建所有文本元素
    textArray.forEach(text => {
        const textElement = document.createElement("div");
        textElement.textContent = text;
        textElement.style.height = "1.2em";
        wrapper.appendChild(textElement);
    });

    let currentIndex = 0;
    let isAnimating = false;

    function updateText() {
        if (isAnimating) return;
        isAnimating = true;

        currentIndex = (currentIndex + 1) % textArray.length;
        wrapper.style.transform = `translateY(-${currentIndex * 1.2}em)`;

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    // 随机设置更新间隔（2-4秒）
    setInterval(updateText, Math.random() * 2000 + 2000);
}

// 为每个容器启动文字滚动
createRollingText(iDesignContainer, iDesignText);
createRollingText(iMakeContainer, iMakeText);
createRollingText(iStudyContainer, iStudyText);
createRollingText(iPlayWithContainer, iPlayWithText);

// 添加必要的CSS
const style = document.createElement('style');
style.textContent = `
    .text-rolling {
        display: inline-block;
        min-width: 100px;
    }

    .text-rolling > div {
        will-change: transform;
    }

    .text-rolling > div > div {
        white-space: nowrap;
    }
`;
document.head.appendChild(style);