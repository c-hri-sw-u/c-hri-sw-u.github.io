# 移动端体验分析报告

## 1. 问题背景
当前网站 (`c-hri-sw-u.github.io`) 的设计初衷是为桌面端（大屏 + 鼠标）服务的。用户反馈在手机端体验较差。主要表现为：
- **交互不符合直觉**：点击图标后的行为不可预测（有时直接跳转，有时显示预览）。
- **布局适配问题**：部分 UI 元素在小屏上显示不全或比例失调。
- **误触与操作困难**：图标密集或过小，难以精确点击。

## 2. 代码深度分析

经过对代码库的详细审查，发现以下具体问题导致了上述体验：

### 2.1 核心交互逻辑冲突 (`drawMapIcons.js` vs `ufo-and-footer.js`)
这是导致移动端体验不稳定的最主要原因。

1.  **`drawMapIcons.js` 的初衷是好的**：
    - 该文件在页面加载时运行，生成地图图标。
    - 它包含了一个 `isTouchDevice` 检测，并试图实现“第一次点击预览，第二次点击跳转”的逻辑。
    - 代码片段：
      ```javascript
      if (isTouchDevice) {
          if (activeWorkId === workId) {
              window.location.href = ...; // 跳转
          } else {
              activeWorkId = workId;
              showWorkDescription(...); // 预览
          }
      }
      ```

2.  **`ufo-and-footer.js` 破坏了这一逻辑**：
    - 该文件包含一个 `addHoverListeners` 函数，用于在自动播放（AutoPlay）结束后重新绑定事件。
    - **严重问题**：该函数在重新绑定 `click` 事件时，**没有包含 `isTouchDevice` 的判断逻辑**，而是直接绑定了跳转行为。
    - 代码片段 (`ufo-and-footer.js`):
      ```javascript
      newWrapper.addEventListener('click', function(e) {
          const workId = this.getAttribute('data-work-id');
          window.location.href = `template.html?work=${workId}&from=map`; // 直接跳转！
      });
      ```
    - 这意味着，一旦 `addHoverListeners` 被调用（例如用户与 UFO 交互、点击 Filter 或自动播放结束后），`drawMapIcons.js` 中精心设计的触屏交互逻辑就会被覆盖，导致用户在手机上点击图标时直接跳转，无法查看预览。

### 2.2 `isTouchDevice` 检测的副作用
在 `drawMapIcons.js` 中：
```javascript
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
// ...
wrapperElement.addEventListener('mouseover', function(e) {
    if (isTouchDevice) return; // 触摸设备忽略 mouseover
    // ...
});
```
- 这种检测方式在**混合设备**（如带触摸屏的 Windows 笔记本）上会误判。
- 结果：使用鼠标访问这些设备的用户将**无法触发 hover 预览**，因为代码认为它是触摸设备并禁用了 `mouseover` 事件。这降低了部分桌面用户的体验。

### 2.3 CSS 布局与视口问题
1.  **固定尺寸与边距**：
    - `map.css` 中使用了大量的固定像素值（如 `left: 32px`, `width: 240px`）。
    - 在小屏幕手机（如 iPhone SE, 宽 320px-375px）上，`32px` 的边距占用了宝贵的屏幕空间，导致内容区域狭窄。
    - `navigater.css` 虽然有 `@media (max-width: 600px)`，但导航栏依然占据屏幕底部较大空间，且缺少针对全面屏手势区域的适配（`safe-area-inset-bottom`）。

2.  **Hover 样式残留**：
    - 手机端没有真正的 hover 状态，但点击元素后，浏览器通常会应用 `:hover` 样式。
    - 导致用户点击导航栏或标签后，该元素一直保持“高亮”状态，直到点击其他地方，造成视觉困惑。

### 2.4 事件响应延迟
- 目前主要依赖 `click` 事件。在移动浏览器上，`click` 事件通常有 ~300ms 的延迟（为了等待双击缩放判断）。
- `filterManager.js` 正确使用了 `touchstart` / `touchend` 来优化体验，但核心的地图图标 (`drawMapIcons.js`) 仍然依赖 `click`，导致操作感觉“迟钝”。

## 3. 改进建议

### 3.1 修复交互逻辑冲突 (优先级：高)
- **统一逻辑**：将 `drawMapIcons.js` 中的触屏处理逻辑提取为公共函数。
- **修正 `ufo-and-footer.js`**：确保 `addHoverListeners` 函数在重新绑定事件时，同样包含“点击预览/再次点击跳转”的逻辑，或者直接复用 `drawMapIcons.js` 的逻辑。

### 3.2 优化触屏检测与响应
- **改用 Media Query**：使用 CSS `@media (hover: hover)` 来控制 hover 样式的应用，而不是通过 JS 禁用事件。
- **保留鼠标事件**：即使在触摸设备上，也不应完全禁用 `mouseover`，除非确定用户正在使用触摸输入（可以通过监听 `touchstart` 来动态标记交互模式）。
- **引入 `touchstart`**：在地图图标上添加 `touchstart` 监听，提升响应速度。

### 3.3 移动端布局适配
- **使用相对单位**：将 `px` 边距改为 `vw` 或百分比，或在移动端使用更小的固定边距（如 `16px`）。
- **调整预览框位置**：在移动端，将悬停预览框 (`.hover-description`) 改为底部弹窗（Bottom Sheet）或居中模态框，而不是跟随图标位置或固定在角落，以防止遮挡内容。

### 3.4 增加“点击空白取消”功能
- 添加全局点击/触摸监听器，当用户点击地图空白区域时，取消当前图标的选中状态并隐藏预览信息。

## 4. 总结
当前的移动端体验问题主要源于**代码逻辑被覆盖**以及**对触摸交互的简单化处理**。通过统一事件绑定逻辑、优化 CSS 媒体查询和调整移动端布局策略，可以显著提升手机用户的浏览体验。
