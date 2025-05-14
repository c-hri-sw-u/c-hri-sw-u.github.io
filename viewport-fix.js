// 视口高度修复 - 为不支持dvh的浏览器提供兼容性
(function() {
    // 检查是否支持dvh单位
    function supportsDvh() {
        const el = document.createElement('div');
        el.style.height = '100dvh';
        return el.style.height === '100dvh';
    }

    // 设置实际视口高度
    function setRealVh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // 只有在不支持dvh时才应用这个修复
    if (!supportsDvh()) {
        // 添加CSS变量
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                :root {
                    --vh: 1vh;
                }
                [data-vh-fallback] {
                    height: calc(var(--vh, 1vh) * 100) !important;
                }
            </style>
        `);

        // 找到所有使用100dvh的元素并添加数据属性
        const elementsToFix = document.querySelectorAll('#map, #myCanvas, #wrapper, #list, #work, #animation, #info');
        elementsToFix.forEach(el => {
            el.setAttribute('data-vh-fallback', '');
        });

        // 设置初始高度并在调整大小时更新
        setRealVh();
        window.addEventListener('resize', setRealVh);
        window.addEventListener('orientationchange', setRealVh);
    }
})(); 