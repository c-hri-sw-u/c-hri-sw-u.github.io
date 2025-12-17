# 移动端重构分析与计划 (Mobile Redesign Analysis & Plan)

## 1. 现状分析 (Current Analysis)

*   **当前体验 (Current Experience)**:
    *   **Desktop**: 全屏地图 (`FullMap`) 提供了沉浸式、非线性的探索体验，鼠标交互流畅，视觉效果好。
    *   **Mobile**: 直接复用全屏地图导致图标拥挤、触控交互冲突（如之前分析的 Click vs Hover 问题）、视野受限。用户难以快速找到感兴趣的作品，"Filter" 菜单虽然存在但不够直观作为主要导航。
*   **用户需求 (User Goal)**:
    *   **核心诉求**: 将移动端的主页从“地图导向”转变为“列表导向”（Feature Works Page）。
    *   **参考模型**: 目前 `template.html` 中的侧边栏 (`Sidebar`) 或 `playground.html` 的列表形式。
    *   **地图定位**: 地图在移动端应退居二线，作为一个趣味性的视觉指示器 (`Indicator`) 或背景元素，而非主要交互区域。

## 2. 解决方案概览 (Proposed Solution)

我们将改造 `index.html`，使其具备**响应式视图切换**能力：
*   **Desktop**: 保持现有的全屏地图体验。
*   **Mobile**: 自动切换为“作品列表”视图，并将地图缩小作为装饰/品牌元素。

### 核心变更点
1.  **入口分流 (Entry Point Divergence)**: 在 `index.html` 加载时检测设备类型/屏幕宽度。
2.  **列表复用 (List Reuse)**: 复用现有的 `generateList.js` 逻辑（目前用于详情页侧边栏），在移动端首页生成完整的作品列表。
3.  **地图微缩 (Map Minimization)**: 通过 CSS Transform 将原有的 `#map` 容器缩小并固定位置，作为动态背景/Icon。

## 3. 详细实施计划 (Implementation Plan)

### 第一阶段：结构准备 (Step 1: Structure)
1.  **引入依赖**: 在 `index.html` 中引入生成列表所需的脚本：
    *   `works.js` (已存在)
    *   `workIcons.js` (已存在)
    *   `generateList.js` (新增引入)
    *   `paper.js` (新增引入，用于绘制列表图标)
2.  **添加容器**: 在 `index.html` 中添加用于承载列表的容器 `<section id="list">`，默认设为隐藏 (`display: none`)。

### 第二阶段：逻辑实现 (Step 2: Logic)
1.  **移动端检测**: 使用 `window.innerWidth` 或 `navigator.userAgent` 判断是否为移动端视图。
2.  **视图切换逻辑**:
    *   **If Mobile**:
        *   隐藏 `#filter-container`。
        *   显示 `#list` 容器。
        *   调用 `generateList()` 函数填充作品数据。
        *   给 `#map` 添加特殊的 CSS 类（如 `.mobile-mini-map`），使其缩小并定位到角落（例如右上角或作为顶部Banner）。
        *   禁用 Mini Map 的交互（`pointer-events: none`），防止误触。
    *   **If Desktop**:
        *   保持原样（隐藏 `#list`，显示全屏地图）。

### 第三阶段：样式适配 (Step 3: Styling)
1.  **列表样式**: 引入或复制 `workTemplate.css` 中关于 `#list` 的样式，并针对移动端全屏显示进行调整（移除侧边栏宽度限制，设为 `width: 100%`）。
2.  **Mini Map 样式**:
    *   使用 `transform: scale(0.3)` (具体比例待调) 缩小地图。
    *   定位方式建议：固定在屏幕右下角或作为顶部背景。
    *   确保 `z-index` 正确，不遮挡列表滚动。

### 第四阶段：验证与微调 (Step 4: Validation)
1.  **功能验证**: 点击列表项是否能正确跳转到 `template.html`？
2.  **视觉验证**: 缩小的地图是否美观？列表滚动是否流畅？
3.  **性能检查**: 同时渲染地图和列表是否会造成卡顿？（如果卡顿，考虑在移动端完全移除地图的 JS 动画，仅保留静态图或 SVG）。

## 4. 预期效果 (Expected Outcome)

*   **Mobile**: 用户打开首页 -> 看到清晰的垂直滚动作品列表 -> 能够直观看到所有项目 -> 点击进入详情。右下角/顶部有一个可爱的微缩地图在转动/漂浮。
*   **Desktop**: 体验完全不变。

## 5. 待确认事项 (Questions)

*   **Mini Map 位置**: 您希望缩小的地图放在哪里？（顶部Banner？右下角悬浮窗？背景水印？）目前计划先尝试**右下角悬浮**或**顶部背景**。
*   **Feature Works 排序**: 列表默认按 `works.js` 中的顺序排列，是否需要特殊排序？（默认按现有逻辑）。
